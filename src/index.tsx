// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";

// Get the Root Element
const rootElement = document.getElementById('root') as HTMLElement;

// Render Element
createRoot(rootElement).render(<App />);
