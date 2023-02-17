import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import UniqueValueClass from "@arcgis/core/renderers/support/UniqueValueClass";
import UniqueValueGroup from "@arcgis/core/renderers/support/UniqueValueGroup";
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";

import { setContentInfo } from "../../components/popup/PopUp";
import dischargeRendererValueExpression from "../../static/dischargeSourceRendererArcade.js?raw";
import recentDischargeUrl from "../../static/error-warning-fill.png";
import pooUrl from "../../static/poo.png";
import notDischargingUrl from "../../static/shield-check-fill.png";

const valueExpression = dischargeRendererValueExpression;
const uniqueValueGroups = [
    new UniqueValueGroup({
        classes: [
            new UniqueValueClass({
                label: "Discharging",
                symbol: new PictureMarkerSymbol({
                    url: pooUrl,
                    width: "32px",
                    height: "32px"
                }),
                values: "Discharging"
            }),
            new UniqueValueClass({
                label: "Not Discharging",
                symbol: new PictureMarkerSymbol({
                    url: notDischargingUrl,
                    width: "16",
                    height: "16"
                }),
                values: "Not Discharging"
            }),
            new UniqueValueClass({
                label: "Recent Discharge",
                symbol: new PictureMarkerSymbol({
                    url: recentDischargeUrl,
                    width: "20",
                    height: "20"
                }),
                values: "Recent Discharge"
            })
        ]
    })
];

export const dischargeRenderer = new UniqueValueRenderer({
    valueExpression,
    uniqueValueGroups
});

export function getDischargePointLayer() {
    const template = new PopupTemplate({
        returnGeometry: true,
        content: setContentInfo
    });

    return new FeatureLayer({
        url: "https://services2.arcgis.com/g6o32ZDQ33GpCIu3/arcgis/rest/services/STEServiceProduction/FeatureServer",
        outFields: ["*"],
        renderer: dischargeRenderer,
        popupTemplate: template,
        effect: `drop-shadow(0.3px 0.5px 0.7px #a0a0925c) drop-shadow(0.4px 0.8px 1px #a0a0925c) drop-shadow( 1px 2px 2.5px #a0a0925c)`,
        orderBy: [
            {
                field: "MostRecentDischargeAlertStart",
                order: "descending"
            }
        ]
    });
}
