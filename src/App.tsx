// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Intro, About, Tools, Projects, Contact } from "./sections";
import Header from "./components/Header";
import Footer from "./components/Footer";
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

// Main
const Main = styled.main`
  position: relative;
  z-index: 1;
`;

/**
 * Application Component
 */
export default function App() {
  // content
  const Content = () => (
    <Main>
      <Header />
      <Intro />
      <About />
      <Tools />
      <Projects />
      <Contact />
      <Footer />
    </Main>
  );

  // Render
  return (
    <React.Fragment>
      <TsParticles url="/particles-presets/particles.json" init={loadFull} />
      <Content />
    </React.Fragment>
  );
}
