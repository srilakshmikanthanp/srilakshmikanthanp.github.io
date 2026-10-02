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
              I'm Sri Lakshmi Kanthan, a software engineer from Kumbakonam,
              Tamil Nadu, India. I studied at Little Flower Higher Secondary
              School, Kumbakonam, and later earned a degree in Information
              Technology from the University College of Engineering, Anna
              University, Trichy.
              <br />
              <br />
              I wrote my first program in C in 11<sup>th</sup> grade, and what
              started as a hobby eventually became my career.
              <br />
              <br />
              Outside of software, I enjoy learning math and physics. I enjoy
              understanding how things work from first principles.
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
