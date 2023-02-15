import styled from "styled-components";

import MapView from "../mapView/MapView";
import { DischargePopup } from "../popup/PopUp";

const PopupContainermock = styled.div`
    height: 200px;
    width: 400px;
`;

function App() {
    // return (
    //     <>
    //         <PopupContainermock>
    //             <DischargePopup
    //                 {...{
    //                     alertStatus: "Discharging",
    //                     discharge: {
    //                         start: 1676268000000,
    //                         end: null
    //                     },
    //                     feeds: "River Hart",
    //                     location: "Crondall"
    //                 }}
    //             ></DischargePopup>
    //         </PopupContainermock>
    //         <PopupContainermock>
    //             <DischargePopup
    //                 {...{
    //                     alertStatus: "Recent Discharge",
    //                     discharge: {
    //                         start: 1676110500000,
    //                         end: 1676113200000
    //                     },
    //                     feeds: "Basingstoke Canal",
    //                     location: "Elvetham Close"
    //                 }}
    //             ></DischargePopup>
    //         </PopupContainermock>
    //         <PopupContainermock>
    //             <DischargePopup
    //                 {...{
    //                     alertStatus: "Not Discharging",
    //                     discharge: {
    //                         start: null,
    //                         end: null
    //                     },
    //                     feeds: "Fleet Brook",
    //                     location: "Avondale Rd"
    //                 }}
    //             ></DischargePopup>
    //         </PopupContainermock>
    //         <PopupContainermock>
    //             <DischargePopup
    //                 {...{
    //                     alertStatus: "Not Discharging",
    //                     discharge: {
    //                         start: 1673876700000,
    //                         end: 1673914500000
    //                     },
    //                     feeds: "River Blackwater",
    //                     location: "Ash Vale"
    //                 }}
    //             ></DischargePopup>
    //         </PopupContainermock>
    //     </>
    // );
    return <MapView></MapView>;
}

export default App;
