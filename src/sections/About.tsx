// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Image } from "../components";

const AboutWrapper = styled.section`
  background-color: var(--pri-bg-color);
  color: var(--pri-fg-color);
  padding: 80px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function About() {
  return (
    <AboutWrapper id="about">
      <Container>
        <Row className="justify-content-center gx-5">
          <Col md={12} lg={6}
            className="p-3 d-flex flex-column justify-content-center order-md-last order-lg-first"
          >
            <h3 className="text-md-center text-lg-start">
              About
            </h3>
            <hr className="w-100"/>
            <p className="text-lg-start text-md-center">
              Hello, I am Sri Lakshmi Kanthan a student from TamilNadu,
              Currently studying Information Technology at Anna University,
              Trichy. I am a self-taught developer and I love to learn new
              things. Other than programming I love math and physics.
              <br /><br />
              I was born in Kumbakonam, which is in Thanjavur. I have
              completed my schooling in little flower higher secondary
              school. After that, I joined Information Technology at Anna
              University (University College of engineering), Trichy.
              <br /><br />
              Since 11<sup>th</sup> std I'm in love with Programming.
              I started with C After that I learned Some languages and
              tools and going to learn new things.
            </p>
          </Col>
          <Col md={12} lg={5}
            className="p-3 d-flex flex-column justify-content-center order-md-first order-lg-last"
          >
            <Image
              src={require('./../assets/images/me.jpeg')}
              alt="Sri Lakshmi Kanthan"
              style={{ width: '250px', height: '250px' }}
            />
          </Col>
        </Row>
      </Container>
    </AboutWrapper>
  );
}
