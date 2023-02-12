import styled from "styled-components";

import { AlertStatus, DischargeTimes } from "./PopUp";

const Container = styled.div`
    background-color: var(--color);
    border-radius: 8px;
    padding: 8px 16px;
    text-align: center;
    line-height: 1.3rem;
`;

type DischargeDateProps = {
    alertStatus: AlertStatus;
    discharge: DischargeTimes;
};

function colorFromAlertStatus(alertStatus: AlertStatus): string {
    switch (alertStatus) {
        case "Discharging":
            return "hsl(0, 100%, 90%)";
        case "Recent Discharge":
            return "hsl(50, 100%, 84%)";
        case "Not Discharging":
            return "hsl(125, 68%, 85%)";
    }
}

const month_names_short = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
function getDischargeDate(dateNumber: number): { month: string; day: number; year: number } {
    const date = new Date(dateNumber);
    return {
        month: month_names_short[date.getMonth()],
        day: date.getDate(),
        year: date.getFullYear()
    };
}

export function DischargeDate({ alertStatus, discharge }: DischargeDateProps) {
    return (
        <Container style={{ "--color": colorFromAlertStatus(alertStatus) } as React.CSSProperties}>
            {discharge.start === null ? (
                <p
                    css={`
                        font-size: 1.5rem;
                    `}
                >
                    N/A
                </p>
            ) : (
                <>
                    <p
                        css={`
                            font-size: 0.9rem;
                        `}
                    >
                        {getDischargeDate(discharge.end ?? Date.now()).month}
                    </p>
                    <p
                        css={`
                            font-size: 1.5rem;
                            font-weight: 500;
                        `}
                    >
                        {getDischargeDate(discharge.end ?? Date.now()).day}
                    </p>
                    <p
                        css={`
                            font-size: 0.7rem;
                        `}
                    >
                        {getDischargeDate(discharge.end ?? Date.now()).year}
                    </p>
                </>
            )}
        </Container>
    );
}
