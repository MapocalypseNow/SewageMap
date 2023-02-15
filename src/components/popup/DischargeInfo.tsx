import React from "react";
import styled from "styled-components";

import { AlertStatus, DischargeTimes } from "./PopUp";

const Container = styled.div`
    line-height: 1.5rem;
`;

const RowLabel = styled.span`
    color: hsl(0, 0%, 50%);
    padding-right: 8px;
`;

type DischargeInfoType = {
    alertStatus: AlertStatus;
    discharge: DischargeTimes;
};

function generateDischargeText(alertStatus: AlertStatus, dischargeStart: number | null) {
    switch (alertStatus) {
        case "Discharging":
            return "Discharging Now 🤮";
        case "Recent Discharge":
            return "Discharge in last 48 hours 🤢";
        case "Not Discharging":
            return dischargeStart
                ? "Historic Discharge Event 🤕"
                : "No Discharges Since 1st April 2022";
    }
}

function timeInterval(start: number, end: number, includeSeconds = false): string {
    const difference = end - start;
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return `${hours > 0 ? `${hours} hours ` : ""}${minutes < 10 ? "0" + minutes : minutes} mins ${
        includeSeconds ? `${seconds < 10 ? "0" + seconds : seconds} sec` : ""
    } `;
}

function unixToAmPm(timestamp: number): string {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const outMinutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hours}:${outMinutes} ${ampm}`;
}

const PulseDot = styled.span`
    border-radius: 100%;
    background-color: hsl(10, 90%, 50%);
    width: 4px;
    display: inline-block;
    height: 4px;
    margin-bottom: 2px;
    vertical-align: middle;
    margin-right: 4px;

    box-shadow: 0 0 0 0 hsl(10, 90%, 50%);
    transform: scale(1);
    animation: pulse 2s infinite;

    @keyframes pulse {
        0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 hsl(9.95633187772926, 89.80392156862744%, 50%, 0.7);
        }

        70% {
            transform: scale(1);
            box-shadow: 0 0 0 5px hsl(10, 90%, 50%, 0);
        }

        100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 hsl(10, 90%, 50%, 0);
        }
    }
`;

function ActiveBadge() {
    return (
        <span
            css={`
                border-radius: 99999px;
                background-color: hsl(0, 100%, 97%);
                padding: 0px 8px;
                border: hsl(0, 100%, 90%) solid 1px;
                color: hsl(10, 90%, 50%);
                font-size: 0.7rem;
            `}
        >
            <PulseDot></PulseDot>
            ACTIVE
        </span>
    );
}

function LiveDischargeTime({ start }: { start: number }) {
    const [currentUTCTime, setCurrentUTCTime] = React.useState(Date.now());

    function refreshClock() {
        setCurrentUTCTime(Date.now());
    }
    React.useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return <>{timeInterval(start, currentUTCTime, true)}</>;
}

export function DischargeInfo({ alertStatus, discharge }: DischargeInfoType) {
    return (
        <Container>
            <p
                css={`
                    font-size: 1.1rem;
                    margin-bottom: 4px;
                `}
            >
                {generateDischargeText(alertStatus, discharge.start)}
            </p>
            {discharge.start != null && (
                <>
                    <p
                        css={`
                            font-size: 0.8rem;
                        `}
                    >
                        <RowLabel>TIME PERIOD</RowLabel> {unixToAmPm(discharge.start)} -{" "}
                        {discharge.end ? unixToAmPm(discharge.end) : <ActiveBadge></ActiveBadge>}
                    </p>
                    <p
                        css={`
                            font-size: 0.8rem;
                        `}
                    >
                        <RowLabel>DURATION</RowLabel>
                        {discharge.end ? (
                            timeInterval(discharge.start, discharge.end)
                        ) : (
                            <LiveDischargeTime start={discharge.start}></LiveDischargeTime>
                        )}
                    </p>
                </>
            )}
        </Container>
    );
}
