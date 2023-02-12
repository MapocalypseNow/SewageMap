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
            return "Discharging Now";
        case "Recent Discharge":
        case "Not Discharging":
            return dischargeStart ? "Last Discharge" : "No Discharges Since 1st April 2022";
    }
}

function timeInterval(start: number, end: number): string {
    const difference = end - start;
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    return `${hours > 0 ? `${hours} hours ` : ""}${minutes < 10 ? "0" + minutes : minutes} mins`;
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

export function DischargeInfo({ alertStatus, discharge }: DischargeInfoType) {
    return (
        <Container>
            <h2
                css={`
                    font-size: 1.2rem;
                    margin-bottom: 4px;
                `}
            >
                {generateDischargeText(alertStatus, discharge.start)}
            </h2>
            {discharge.start != null && (
                <>
                    <p
                        css={`
                            font-size: 0.8rem;
                        `}
                    >
                        <RowLabel>TIME PERIOD</RowLabel> {unixToAmPm(discharge.start)} -{" "}
                        {discharge.end ? unixToAmPm(discharge.end) : "ongoing"}
                    </p>
                    <p
                        css={`
                            font-size: 0.8rem;
                        `}
                    >
                        <RowLabel>DURATION</RowLabel>
                        {timeInterval(discharge.start, discharge.end ?? Date.now())}
                    </p>
                </>
            )}
        </Container>
    );
}
