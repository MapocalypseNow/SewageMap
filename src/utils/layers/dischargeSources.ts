import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import UniqueValueClass from "@arcgis/core/renderers/support/UniqueValueClass";
import UniqueValueGroup from "@arcgis/core/renderers/support/UniqueValueGroup";
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";

import { setContentInfo } from "../../components/popup/PopUp";
import recentDischargeUrl from "../../static/error-warning-fill.png";
import pooUrl from "../../static/poo.png";
import notDischargingUrl from "../../static/shield-check-fill.png";

const valueExpression =
    'var statuses = ["Not Discharging", "Recent Discharge", "Discharging", "Offline"];\r\nvar index = 3;\r\nif (Boolean($feature.AlertPast48Hours) == true && Lower(Trim($feature.AlertStatus)) != "discharging"  && Lower(Trim($feature.AlertStatus)) != "offline")\r\n{\r\n    index = 1;\r\n} else if ( Lower(Trim($feature.AlertStatus)) == "not discharging" )\r\n{\r\n    index = 0;\r\n} else if ( $feature.AlertStatus == null || IsEmpty($feature.AlertStatus) )\r\n{\r\n    index = 3;\r\n} else if ( Lower(Trim($feature.AlertStatus)) == "discharging")\r\n{\r\n    index = 2;\r\n} else if ( Lower(Trim($feature.AlertStatus)) == "offline")\r\n{\r\n    index = 3;\r\n} \r\n\r\nreturn statuses[index];';

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
                    width: "20",
                    height: "20"
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
        orderBy: [
            {
                field: "MostRecentDischargeAlertStart",
                order: "descending"
            }
        ]
    });
}
