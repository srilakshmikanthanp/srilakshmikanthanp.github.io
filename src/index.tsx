// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import "./styles/global.module.css";
import ReactDOM from "react-dom";
import App from "./App";

// Get the Root Element
const rootElement = document.getElementById('root');

// Element
const element = <App />;

// Render Element
ReactDOM.render(element, rootElement);
