// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Intro, About, Tools, Projects, Contact } from "./sections";
import { Header, Footer } from "./components";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import styled from "styled-components";
import React from "react";

// Particles
const TsParticles = styled(Particles)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 0;
`;

/**
 * Application Component
 */
export default function App() {
  return (
    <React.Fragment>
      <TsParticles
        url="/particles-presets/particles.json"
        init={loadFull}
      />
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
