// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Intro, About, Tools, Projects, Contact } from "./sections";
import { Header, Footer } from "./components";
import React from "react";

/**
 * Application Component
 */
export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Intro />
      <About />
      <Tools />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}
