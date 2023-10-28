import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AnchorProvider } from "react-anchor-navigation";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <AnchorProvider>
            <App />
        </AnchorProvider>
    </BrowserRouter>
);
