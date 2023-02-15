import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import Graphic from "@arcgis/core/Graphic";
import * as esriSymbolsJsonUtils from "@arcgis/core/symbols/support/jsonUtils";
import * as symbolUtils from "@arcgis/core/symbols/support/symbolUtils";
import throttle from "@jcoreio/async-throttle";

export class MarkerPopEffect {
    private mapView: __esri.MapView;
    private layer: __esri.Layer;
    private scaleFactor: number;
    private animationSpeed: number;

    constructor({
        view,
        layer,
        scaleFactor,
        animationSpeed = 200
    }: {
        view: __esri.MapView;
        layer: __esri.Layer;
        scaleFactor: number;
        animationSpeed?: number;
    }) {
        this.mapView = view;
        this.layer = layer;
        this.scaleFactor = scaleFactor;
        this.animationSpeed = animationSpeed;

        reactiveUtils.on(
            () => this.mapView,
            "pointer-move",
            (event) => {
                const opts = {
                    include: [this.layer]
                };

                this.hitTest(event, opts);
            }
        );
    }

    private _activeAnimatedGraphic: IAnimatedGraphic | null = null;

    public set activeAnimatedGraphic(hitGraphic: __esri.Graphic | null) {
        if (hitGraphic === null) {
            // cancel the current active AnimatedGraphic if present.
            this._activeAnimatedGraphic && this.abortAnimation(this._activeAnimatedGraphic);
            this._activeAnimatedGraphic = null;
            return;
        }

        if (
            this._activeAnimatedGraphic !== null &&
            this.isSameGraphic(this._activeAnimatedGraphic, hitGraphic)
        ) {
            return;
        }
        this._activeAnimatedGraphic && this.abortAnimation(this._activeAnimatedGraphic);
        this._activeAnimatedGraphic = createAnimatedSymbol(hitGraphic.clone());
        this.animatePointPopEffect(this._activeAnimatedGraphic);
    }

    private animatePointPopEffect(animatedGraphic: IAnimatedGraphic) {
        this.mapView.graphics.add(animatedGraphic);

        switch (animatedGraphic.symbol.type) {
            case "simple-marker": {
                const { size } = animatedGraphic.symbol as __esri.SimpleMarkerSymbol;
                animatedGraphic.animationManager.animateSimpleMarkerSize(
                    size,
                    size * this.scaleFactor,
                    200
                );
                break;
            }
            case "picture-marker": {
                const { height, width } = animatedGraphic.symbol as __esri.PictureMarkerSymbol;
                animatedGraphic.animationManager.animatePictureMarkerSize(
                    { height, width },
                    { height: height * this.scaleFactor, width: width * this.scaleFactor },
                    this.animationSpeed
                );
            }
        }
    }

    private abortAnimation(animatedGraphic: IAnimatedGraphic) {
        switch (animatedGraphic.symbol.type) {
            case "simple-marker": {
                const startSize = (animatedGraphic.symbol as __esri.SimpleMarkerSymbol).size;
                const endSize = (
                    animatedGraphic.animationManager.originalSymbol as __esri.SimpleMarkerSymbol
                ).size;
                animatedGraphic.animationManager.animateSimpleMarkerSize(
                    startSize,
                    endSize,
                    this.animationSpeed,
                    () => {
                        this.mapView.graphics.remove(animatedGraphic);
                    }
                );
                break;
            }
            case "picture-marker": {
                const { height: startHeight, width: startWidth } =
                    animatedGraphic.symbol as __esri.PictureMarkerSymbol;
                const { height: endHeight, width: endWidth } = animatedGraphic.animationManager
                    .originalSymbol as __esri.PictureMarkerSymbol;
                animatedGraphic.animationManager.animatePictureMarkerSize(
                    { height: startHeight, width: startWidth },
                    { height: endHeight, width: endWidth },
                    this.animationSpeed,
                    () => {
                        this.mapView.graphics.remove(animatedGraphic);
                    }
                );
            }
        }
    }

    /** check if two graphics are the same by doign a simple comparison of their object ids */
    private isSameGraphic(graphic: Graphic, testGraphic: Graphic): boolean {
        return graphic.getObjectId() === testGraphic.getObjectId();
    }

    /**
     * performs a hit test on the mapView object. The function is decorated with the throttle
     * function which limits the rate at which the function can be executed.
     *
     */
    private hitTest = throttle(
        async (
            event: __esri.MapViewScreenPoint | MouseEvent,
            options: { include: __esri.HitTestItem[] }
        ) => {
            // Include the current active animated Graphic in the hit test results. So that we
            // can deduplicate hits on the same layer graphic.
            if (this._activeAnimatedGraphic) {
                options.include.push(this._activeAnimatedGraphic);
            }

            const { results } = await this.mapView.hitTest(event, options);
            const hitGraphics = results.filter(
                (result) => (result.type = "graphic")
            ) as __esri.GraphicHit[];

            const animateGraphics = hitGraphics.filter((graphic) => graphic.layer === null);
            if (animateGraphics.length) {
                //ignore as hovering the current animation graphic
                return;
            }

            const layerGraphics = hitGraphics.filter((graphic) => graphic.layer !== null);
            if (hitGraphics.length) {
                const firstLayerGraphic: __esri.Graphic = layerGraphics[0].graphic;
                // The hit test result does not include a symbol so quickly regenerate it here.
                firstLayerGraphic.symbol = await symbolUtils.getDisplayedSymbol(firstLayerGraphic);
                this.activeAnimatedGraphic = firstLayerGraphic;
                this.mapView.container?.classList.add("cursor-pointer");
            } else {
                this.mapView.container?.classList.remove("cursor-pointer");
                this.activeAnimatedGraphic = null;
            }
        },
        60
    );
}

interface IAnimatedGraphic extends Graphic {
    animationManager: AnimationManager;
}

function createAnimatedSymbol(graphic: Graphic): IAnimatedGraphic {
    (graphic as IAnimatedGraphic).animationManager = new AnimationManager(graphic);
    return graphic as IAnimatedGraphic;
}

class AnimationManager {
    constructor(graphic: Graphic) {
        this.graphic = graphic;
        this.originalSymbol = esriSymbolsJsonUtils.fromJSON(graphic.symbol.toJSON());
    }

    private graphic: Graphic;
    public originalSymbol: __esri.Symbol;

    private animationStartTimeStamp = 0;

    private resetAnimationTimeStamps() {
        this.animationStartTimeStamp = 0;
    }

    private easeOutQuad = (t: number) => t * (2 - t);

    private updateSimpleMarkerSize(newSize: number) {
        const sym = esriSymbolsJsonUtils.fromJSON(this.graphic.symbol.toJSON());
        (sym as __esri.SimpleMarkerSymbol).size = newSize;
        this.graphic.symbol = sym;
    }

    private updatePictureMarkerSize(newSize: { width: number; height: number }) {
        const sym = esriSymbolsJsonUtils.fromJSON(this.graphic.symbol.toJSON());
        (sym as __esri.PictureMarkerSymbol).width = newSize.width;
        (sym as __esri.PictureMarkerSymbol).height = newSize.height;
        this.graphic.symbol = sym;
    }

    private abortCurrentAnimation: () => any = () => {
        return;
    };
    public animateSimpleMarkerSize(
        from: number,
        to: number,
        duration = 2000,
        abortCallback?: () => unknown | undefined
    ) {
        this.abortCurrentAnimation?.();
        let abort = false;
        const step: FrameRequestCallback = (timestamp) => {
            if (this.animationStartTimeStamp === 0) {
                this.animationStartTimeStamp = timestamp;
            }
            const elapsed = timestamp - this.animationStartTimeStamp;

            if (!abort && elapsed < duration) {
                const animationStep = this.easeOutQuad(elapsed / duration);
                this.updateSimpleMarkerSize(from + (to - from) * animationStep);
                window.requestAnimationFrame(step);
            } else {
                this.resetAnimationTimeStamps();
                abortCallback && abortCallback();
            }
        };

        window.requestAnimationFrame(step);
        this.abortCurrentAnimation = () => {
            abort = true;
        };
    }

    public animatePictureMarkerSize(
        from: { width: number; height: number },
        to: { width: number; height: number },
        duration = 2000,
        abortCallback?: () => unknown | undefined
    ) {
        this.abortCurrentAnimation?.();
        let abort = false;
        const step: FrameRequestCallback = (timestamp) => {
            if (this.animationStartTimeStamp === 0) {
                this.animationStartTimeStamp = timestamp;
            }
            const elapsed = timestamp - this.animationStartTimeStamp;

            if (!abort && elapsed < duration) {
                const animationStep = this.easeOutQuad(elapsed / duration);
                this.updatePictureMarkerSize({
                    width: from.width + (to.width - from.width) * animationStep,
                    height: from.height + (to.height - from.height) * animationStep
                });
                window.requestAnimationFrame(step);
            } else {
                this.resetAnimationTimeStamps();
                abortCallback && abortCallback();
            }
        };

        window.requestAnimationFrame(step);
        this.abortCurrentAnimation = () => {
            abort = true;
        };
    }
}
