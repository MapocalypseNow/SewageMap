import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import * as colorRendererCreator from "@arcgis/core/smartMapping/renderers/color";
import * as colorSchemes from "@arcgis/core/smartMapping/symbology/color";

import geojson from "../../static/sampleThames.json";

export async function getRiverDischargeLayer() {
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

    return layer;
}
