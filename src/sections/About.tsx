// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Image } from "../components";

const AboutWrapper = styled.section`
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function About() {
  return (
    <AboutWrapper id="about">
      <Container>
        <Row>
          <Col md={12} lg={6} className="p-3">
            <h3 className="text-center">
              About
            </h3>
            <hr />
            <p className="text-center">
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
          <Col md={12} lg={6} className="p-3">
            <Image
              src={require('./../assets/images/me.jpeg')}
              alt="Sri Lakshmi Kanthan"
            />
          </Col>
        </Row>
      </Container>
    </AboutWrapper>
  );
}
