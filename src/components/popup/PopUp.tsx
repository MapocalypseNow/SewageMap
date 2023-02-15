import React from "react";
import { createRoot } from "react-dom/client";
import styled from "styled-components";

import GlobalStyles from "../App/GlobalStyles";
import { PopUpMainContent } from "./PopUpContent";
import { PopUpHeader } from "./PopUpHeader";

export function setContentInfo(feature: { graphic: __esri.Graphic }) {
    // create a chart for example

    const container = document.createElement("div");
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <GlobalStyles></GlobalStyles>
            <DischargePopup {...getRenderProps(feature.graphic)}></DischargePopup>
        </React.StrictMode>
    );
    return container;
}

function getRenderProps(feature: __esri.Graphic): DischargePopupType {
    const { attributes } = feature;
    const alertPast48Hours: boolean = attributes["AlertPast48Hours"] === "true";
    const alertStatusField = (attributes["AlertStatus"] as string).trim().toLocaleLowerCase();
    const dischargeStart = attributes["MostRecentDischargeAlertStart"];
    const dischargeEnd = attributes["MostRecentDischargeAlertStop"];
    const feeds = attributes["ReceivingWaterCourse"];
    const location = attributes["LocationName"];
    console.log({
        alertStatus: getAlertStatus(alertPast48Hours, alertStatusField),
        discharge: {
            start: dischargeStart,
            end: dischargeEnd
        },
        feeds,
        location
    });
    return {
        alertStatus: getAlertStatus(alertPast48Hours, alertStatusField),
        discharge: {
            start: dischargeStart,
            end: dischargeEnd
        },
        feeds,
        location
    };
}

function getAlertStatus(alertPast48Hours: boolean, alertStatusField: string): AlertStatus {
    if (
        alertPast48Hours === true &&
        alertStatusField != "discharging" &&
        alertStatusField != "offline"
    ) {
        return "Recent Discharge";
    } else if (alertStatusField == "not discharging") {
        return "Not Discharging";
    } else if (alertStatusField == "discharging") {
        return "Discharging";
    }

    return "Not Discharging";
}

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export type AlertStatus = "Not Discharging" | "Recent Discharge" | "Discharging";

export type DischargeTimes = {
    start: number | null;
    end: number | null;
};

type DischargePopupType = {
    alertStatus: AlertStatus;
    discharge: DischargeTimes;
    feeds: string;
    location: string;
};

export function DischargePopup(props: DischargePopupType) {
    return (
        <Wrapper>
            <PopUpHeader {...props}></PopUpHeader>
            <PopUpMainContent {...props}></PopUpMainContent>
        </Wrapper>
    );
}
