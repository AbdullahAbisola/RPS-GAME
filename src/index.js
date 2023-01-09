import React from "react"
import { createRoot } from 'react-dom/client';

// THESE 2 STATEMENTS ABOVE ARE HOOKS THAT ALLOW OUR REACT TO COMMUNICATE WITH THE HTML

import App from "./App"
import "./index.css"
// For the strings without a file extension eg "./App", it is already a javascript file by default therefore no
// need for .js after

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);