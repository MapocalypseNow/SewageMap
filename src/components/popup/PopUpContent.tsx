import styled from "styled-components";

import { DischargeDate } from "./DischargeDate";
import { DischargeInfo } from "./DischargeInfo";
import { AlertStatus, DischargeTimes } from "./PopUp";

export const DischargeDataCardWrapper = styled.div`
    --shadow-color: 0deg 0% 0%;
    --shadow-elevation-medium: 0.2px 0.3px 0.4px hsl(var(--shadow-color) / 0.1),
        0.5px 1px 1.2px -0.8px hsl(var(--shadow-color) / 0.09),
        1.2px 2.5px 3.1px -1.7px hsl(var(--shadow-color) / 0.09),
        3px 6px 7.5px -2.5px hsl(var(--shadow-color) / 0.09);
    margin: 8px 0px;
    margin-top: 0px;
    padding: 8px;
    border-radius: 8px;
    box-shadow: var(--shadow-elevation-medium);
    border: hsl(0, 0%, 90%) solid 1px;
    display: flex;
    gap: 8px;
`;

type DischargeMainContentType = {
    alertStatus: AlertStatus;
    discharge: DischargeTimes;
};

export function PopUpMainContent(props: DischargeMainContentType) {
    return (
        <DischargeDataCardWrapper>
            <DischargeDate {...props}></DischargeDate>
            <DischargeInfo {...props}></DischargeInfo>
        </DischargeDataCardWrapper>
    );
}
