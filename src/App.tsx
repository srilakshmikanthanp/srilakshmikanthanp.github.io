// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Header, Footer } from "./components";
import "./styles/global.module.css";
import React from "react";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Footer />
    </React.Fragment>
  );
}
