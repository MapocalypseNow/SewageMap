import Basemap from "@arcgis/core/Basemap";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import Map from "@arcgis/core/Map";
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
                url: "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
                countryCode: "GB",
                suggestionsEnabled: true,
                minSuggestCharacters: 2
            })
        ]
    });

    console.log(searchWidget.viewModel);

    // searchWidget.viewModel.activeSource.filter = {
    //     geometry: new Extent({
    //         xmin: -1060214.3251,
    //         ymin: -1540060.9658000004,
    //         xmax: 1867129.296,
    //         ymax: 2227462.0467000017,
    //         spatialReference: { wkid: 27700 }
    //     })
    // };

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
