import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@cloudscape-design/global-styles/index.css";

import "./styles.css";
import App from "./app";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)
