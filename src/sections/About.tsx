// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Image from "../components/Image";

const AboutWrapper = styled.section`
  background-color: var(--pri-bg-color);
  color: var(--pri-fg-color);
  padding: 80px 20px;
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
          <Col
            md={12}
            lg={6}
            className="p-3 d-flex flex-column justify-content-center order-last order-lg-first"
          >
            <h3 className="text-center text-lg-start">About</h3>
            <hr className="w-100" />
            <p className="text-center text-lg-start">
              Hello, I'm Sri Lakshmi Kanthan, a student from Tamil Nadu. I
              graduated with a degree in Information Technology from Anna
              University, Trichy. As a self-taught developer, I'm passionate
              about learning new things. Besides programming, I have a strong
              interest in math and physics.
              <br />
              <br />
              I was born in Kumbakonam, located in Thanjavur, Tamil Nadu, India.
              I completed my schooling at Little Flower Higher Secondary School
              before pursuing a degree in Information Technology at Anna
              University (University College of Engineering), Trichy.
              <br />
              <br />
              I've been passionate about programming since 11<sup>th</sup> grade, 
              starting with C. Since then, I've learned several languages
              and tools, and I'm always eager to explore new technologies.
            </p>
          </Col>
          <Col
            md={12}
            lg={5}
            className="p-3 d-flex flex-column justify-content-center order-first order-lg-last"
          >
            <Image
              src={require("./../assets/images/me.jpg")}
              alt="Sri Lakshmi Kanthan"
              style={{ width: "280px", height: "280px" }}
            />
          </Col>
        </Row>
      </Container>
    </AboutWrapper>
  );
}
