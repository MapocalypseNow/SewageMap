import "./MapView.css";

import Basemap from "@arcgis/core/Basemap";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import Map from "@arcgis/core/Map";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import * as colorRendererCreator from "@arcgis/core/smartMapping/renderers/color";
import * as colorSchemes from "@arcgis/core/smartMapping/symbology/color";
import MapView from "@arcgis/core/views/MapView";
import React from "react";

import { dischargeRenderer } from "../../static/dischargeRenderer";
import geojson from "../../static/sampleThames.json";
import { MarkerPopEffect } from "../../utils/MarkerAnimate";
import { setContentInfo } from "../popup/PopUp";

function MapViewComponent() {
    const mapDiv = React.useRef<HTMLInputElement>(null);

    const initMapView = async () => {
        if (mapDiv.current) {
            // create a new blob from geojson featurecollection
            const blob = new Blob([JSON.stringify(geojson)], {
                type: "application/json"
            });

            // URL reference to the blob
            const url = URL.createObjectURL(blob);
            // create new geojson layer using the blob url
            const layer = new GeoJSONLayer({
                title: "Upstream Sewage",
                url,
                editingEnabled: true
            });

            const brownScheme = colorSchemes.getSchemeByName({
                basemapTheme: "dark",
                geometryType: "point",
                theme: "high-to-low",
                name: "Brown 3"
            });

            const colorParams: __esri.colorCreateContinuousRendererParams = {
                layer: layer,
                field: "upstream_sources",
                colorScheme: brownScheme
            };

            const { renderer } = await colorRendererCreator.createContinuousRenderer(colorParams);
            renderer.classBreakInfos.forEach((classbreak) => {
                (classbreak.symbol as __esri.SimpleMarkerSymbol).outline.width = 0;
            });

            layer.renderer = renderer;
            // The following snippet shows how to use a function
            // to create a simple node and display it in the popup template content
            const template = new PopupTemplate({
                content: setContentInfo
            });
            const dischargePointsLayer = new FeatureLayer({
                url: "https://services2.arcgis.com/g6o32ZDQ33GpCIu3/arcgis/rest/services/STEServiceProduction/FeatureServer",
                outFields: ["*"],
                renderer: dischargeRenderer,
                popupTemplate: template,
                orderBy: [
                    {
                        field: "MostRecentDischargeAlertStart",
                        order: "descending"
                    }
                ]
            });

            const basemap = new Basemap({ portalItem: { id: "a8c045aa74d643cc9e2fa2702cc4cb45" } });

            /**
             * Initialize application
             */
            const map = new Map({
                basemap,
                layers: [layer, dischargePointsLayer]
            });

            const view = new MapView({
                container: mapDiv.current,
                map: map,
                center: [-0.75, 51.6],
                zoom: 8,
                highlightOptions: {
                    fillOpacity: 0,
                    haloOpacity: 1
                }
            });

            new MarkerPopEffect({
                view,
                layer: dischargePointsLayer,
                scaleFactor: 1.5,
                animationSpeed: 150
            });
        }
    };

    React.useEffect(() => {
        initMapView()
            // make sure to catch any error
            .catch(console.error);
    }, []);

    return <div className="mapDiv" ref={mapDiv}></div>;
}

export default MapViewComponent;
