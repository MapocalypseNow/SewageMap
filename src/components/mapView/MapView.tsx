import Basemap from "@arcgis/core/Basemap";
import esriConfig from "@arcgis/core/config";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Map from "@arcgis/core/Map";
import * as geoprocessor from "@arcgis/core/rest/geoprocessor";
import Query from "@arcgis/core/rest/support/Query";
import * as symbolUtils from "@arcgis/core/symbols/support/symbolUtils";
import esriMapView from "@arcgis/core/views/MapView";
import Search from "@arcgis/core/widgets/Search";
import LocatorSearchSource from "@arcgis/core/widgets/Search/LocatorSearchSource";
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
    esriConfig.apiKey =
        "AAPK27fcdc2310f14ea59b10f7a3f0b992f6pr7xdq6MOr38g1z2ybBfXE8JnBesHZgo_c2XF5GpocoAc9CpjY-Px6uSRly9uLmC";
    const map = new Map({
        basemap: new Basemap({ portalItem: { id: "a8c045aa74d643cc9e2fa2702cc4cb45" } }),
        layers: [dischargeSourceLayer]
    });

    const view = new esriMapView({
        container: mapElement,
        constraints: {
            minZoom: 6
        },
        map: map,
        center: [-0.75, 51.6],
        zoom: 8,
        highlightOptions: {
            fillOpacity: 0,
            haloOpacity: 1
        }
    });

    const searchWidget = new Search({
        view: view,
        includeDefaultSources: false,
        sources: [
            new LocatorSearchSource({
                placeholder: "Find address or place",
                url: "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
                countryCode: "GB",
                suggestionsEnabled: true,
                minSuggestCharacters: 2
            })
        ]
    });

    view.ui.add(searchWidget, { position: "top-right" });

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

    // map.add(await getRiverDischargeLayer(), 0);

    const discharginFeaturesQuery = new Query({
        where: "AlertPast48Hours = 'true'",
        returnGeometry: true,
        outFields: ["*"]
    });
    const result = await dischargeSourceLayer.queryFeatures(discharginFeaturesQuery);

    if (result.features?.length > 0) {
        const gpJob = await geoprocessor.submitJob(
            "https://hydro.arcgis.com/arcgis/rest/services/Tools/Hydrology/GPServer/TraceDownstream",
            {
                PointIDField: "PermitNumber",
                f: "json",
                InputPoints: JSON.stringify(result.toJSON())
            }
        );
        await gpJob.waitForJobCompletion();
        const { value } = await gpJob.fetchResultData("OutputTraceLine");
        const OutputTraceLine = value as __esri.FeatureSet;
        if (OutputTraceLine) {
            const layer = new FeatureLayer({
                source: OutputTraceLine.features, // array of graphics objects
                objectIdField: "OBJECTID",
                fields: OutputTraceLine.fields,
                renderer: {
                    type: "simple", // autocasts as new SimpleRenderer()
                    symbol: {
                        type: "simple-line", // autocasts as new SimpleLineSymbol()
                        color: "#733f2e",
                        width: "8px",
                        style: "solid"
                    }
                } as any
            });

            map.add(layer, 0);
        }
    }
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
