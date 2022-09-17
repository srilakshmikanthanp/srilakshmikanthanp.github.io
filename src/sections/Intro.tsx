// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Typewriter from 'typewriter-effect';
import styled from "styled-components";

const IntroWrapper = styled.section`
  background-color: var(--pri-bg-color);
  color: var(--pri-fg-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.header`
  color: var(--sec-fg-color);
  font-size: 1.2rem;
  text-align: center;
  font-family: monospace;
`;

const Body = styled.span`
  color: var(--pri-fg-color);
  font-size: 1.7rem;
  text-align: center;
  font-family: monospace;
`;

const Footer = styled.footer`
  color: var(--sec-fg-color);
  font-size: 1.2rem;
  text-align: center;
  display: flex;
  gap: 10px;
  flex-direction: row;
  font-family: monospace;
`;

export default function Intro() {
  // Type Writer words
  const words = ['I am a Student !', 'I am a Programmer !', 'I am a Stupid 😂'];

  // Type writer
  const typeWriter = (
    <Typewriter
      options={{ strings: words, loop: true, autoStart: true }}
    />
  );

  return (
    <IntroWrapper id="intro">
      <Header>
        Hi! This is,
      </Header>
      <Body>
        Sri Lakshmi Kanthan
      </Body>
      <Footer>
        {typeWriter}
      </Footer>
    </IntroWrapper>
  );
}
