import styled from "styled-components";

import recentDischargeUrl from "../../static/error-warning-fill.png";
import pooUrl from "../../static/poo.png";
import notDischargingUrl from "../../static/shield-check-fill.png";
import { AlertStatus } from "./PopUp";

const Header = styled.header`
    display: flex;
    gap: 8px;
    padding: 8px 0px;
    flex-direction: row;
`;

const Icon = styled.img`
    width: 30px;
    height: 30px;
`;

const Title = styled.h1`
    font-size: 1.2rem;
    color: hsl(0, 0%, 20%);
    line-height: 1.1;
`;

const SubTitle = styled.p`
    font-size: 0.9rem;
    color: hsl(0, 0%, 30%);
`;

function getDischargeIcon(alertStatus: AlertStatus) {
    switch (alertStatus) {
        case "Discharging":
            return pooUrl;
        case "Recent Discharge":
            return recentDischargeUrl;
        case "Not Discharging":
            return notDischargingUrl;
    }
}

type DischargePopupHeaderType = {
    alertStatus: AlertStatus;
    location: string;
    feeds: string;
};

export function PopUpHeader({ alertStatus, location, feeds }: DischargePopupHeaderType) {
    return (
        <Header>
            <Icon src={getDischargeIcon(alertStatus)}></Icon>
            <div>
                <Title>{location}</Title>
                <SubTitle>Feeds into: {feeds}</SubTitle>
            </div>
        </Header>
    );
}
