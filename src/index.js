import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"

// import App from "./Chapter01"
import App from './ui_as_tree/App'

const root = createRoot(document.getElementById("root"))
root.render(
    <StrictMode>
        <App />
    </StrictMode>
)