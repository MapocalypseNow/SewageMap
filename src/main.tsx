import "./styles/index.css";

import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App/App";
import GlobalStyles from "./components/App/GlobalStyles";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);
root.render(
    <React.StrictMode>
        <GlobalStyles></GlobalStyles>
        <App />
    </React.StrictMode>
);
