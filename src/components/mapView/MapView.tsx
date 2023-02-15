import Basemap from "@arcgis/core/Basemap";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import Map from "@arcgis/core/Map";
import * as symbolUtils from "@arcgis/core/symbols/support/symbolUtils";
import esriMapView from "@arcgis/core/views/MapView";
import Search from "@arcgis/core/widgets/Search";
import React from "react";
import styled from "styled-components";

import { getDischargePointLayer } from "../../utils/layers/dischargeSources";
import { getRiverDischargeLayer } from "../../utils/layers/riverDischarge";
import { MarkerPopEffect } from "../../utils/MarkerAnimate";

const MapViewContainer = styled.div`
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
`;

async function initialiseMapview(mapElement: HTMLDivElement): Promise<void> {
    const dischargeSourceLayer = getDischargePointLayer();

    const map = new Map({
        basemap: new Basemap({ portalItem: { id: "a8c045aa74d643cc9e2fa2702cc4cb45" } }),
        layers: [dischargeSourceLayer]
    });

    const view = new esriMapView({
        container: mapElement,
        map: map,
        center: [-0.75, 51.6],
        zoom: 8,
        highlightOptions: {
            fillOpacity: 0,
            haloOpacity: 1
        }
    });

    view.ui.add(
        new Search({
            view: view
        }),
        { position: "top-right" }
    );

    const MarkerPopEffectManager = new MarkerPopEffect({
        view,
        layer: dischargeSourceLayer,
        scaleFactor: 1.5,
        animationSpeed: 150
    });

    reactiveUtils.when(
        () => view.popup?.selectedFeature,
        async (graphic) => {
            if (graphic?.layer === dischargeSourceLayer) {
                view.popup.viewModel.location = view.popup.selectedFeature.geometry as __esri.Point;
                view.goTo({ target: view.popup.selectedFeature, zoom: 12 });
                graphic.symbol = await symbolUtils.getDisplayedSymbol(graphic);
                MarkerPopEffectManager.activeAnimatedGraphic = graphic;
            } else {
                MarkerPopEffectManager.activeAnimatedGraphic = null;
            }
        }
    );

    map.add(await getRiverDischargeLayer(), 0);
}

function MapView() {
    const mapDiv = React.useRef<HTMLDivElement>(null);

    const initMapView = async () => {
        mapDiv.current && initialiseMapview(mapDiv.current);
    };

    React.useEffect(() => {
        initMapView()
            // make sure to catch any error
            .catch(console.error);
    }, []);

    return <MapViewContainer ref={mapDiv}></MapViewContainer>;
}

export default MapView;
