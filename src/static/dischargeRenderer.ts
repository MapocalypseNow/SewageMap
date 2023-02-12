import UniqueValueClass from "@arcgis/core/renderers/support/UniqueValueClass";
import UniqueValueGroup from "@arcgis/core/renderers/support/UniqueValueGroup";
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";

import recentDischargeUrl from "./error-warning-fill.png";
import pooUrl from "./poo.png";
import notDischargingUrl from "./shield-check-fill.png";

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

// {

//     uniqueValueGroups: [
//         {
//             classes: [
//                 {
//                     label: "Not Discharging",
//                     symbol: {
//                         type: "esriPMS",
//                         angle: 0,
//                         xoffset: 0,
//                         yoffset: 0,
//                         url: "https://jrteststorageaccount.blob.core.windows.net/public-stuff/Icon_no_spill.png",
//                         height: 24.75,
//                         width: 24.75
//                     },
//                     values: [["Not Discharging"]]
//                 },
//                 {
//                     label: "Offline",
//                     symbol: {
//                         type: "esriPMS",
//                         angle: 0,
//                         xoffset: 0,
//                         yoffset: 0,
//                         url: "https://www.thameswater.co.uk/media-library/images/icons/broken-monitor.png",
//                         height: 24.75,
//                         width: 24.75
//                     },
//                     values: [["Offline"]]
//                 },
//                 {
//                     label: "Recent Discharge",
//                     symbol: {
//                         type: "esriPMS",
//                         angle: 0,
//                         xoffset: 0,
//                         yoffset: 0,
//                         url: "https://www.thameswater.co.uk/media-library/images/icons/recent-spill.png",
//                         height: 24.75,
//                         width: 24.75
//                     },
//                     values: [["Recent Discharge"]]
//                 }
//             ]
//         }
//     ],
//     uniqueValueInfos: [
//         {
//             label: "Not Discharging",
//             symbol: {
//                 type: "esriPMS",
//                 angle: 0,
//                 xoffset: 0,
//                 yoffset: 0,
//                 url: "https://jrteststorageaccount.blob.core.windows.net/public-stuff/Icon_no_spill.png",
//                 height: 24.75,
//                 width: 24.75
//             },
//             value: "Not Discharging"
//         },
//         {
//             label: "Offline",
//             symbol: {
//                 type: "esriPMS",
//                 angle: 0,
//                 xoffset: 0,
//                 yoffset: 0,
//                 url: "https://www.thameswater.co.uk/media-library/images/icons/broken-monitor.png",
//                 height: 24.75,
//                 width: 24.75
//             },
//             value: "Offline"
//         },
//         {
//             label: "Recent Discharge",
//             symbol: {
//                 type: "esriPMS",
//                 angle: 0,
//                 xoffset: 0,
//                 yoffset: 0,
//                 url: "https://www.thameswater.co.uk/media-library/images/icons/recent-spill.png",
//                 height: 24.75,
//                 width: 24.75
//             },
//             value: "Recent Discharge"
//         }
//     ]
// };
