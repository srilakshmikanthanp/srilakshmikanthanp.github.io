// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Image from "../components/Image";
import BtnLink from "../components/BtnLink";

const ProjectsWrapper = styled.div`
  background-color: var(--pri-bg-color);
  color: var(--pri-fg-color);
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Projects() {
  return (
    <ProjectsWrapper id="projects">
      <Container>
        <Row className="justify-content-center gx-5">
          <Col
            md={12}
            lg={6}
            className="p-3 d-flex flex-column justify-content-center order-last order-lg-first"
          >
            <h3 className="text-center text-lg-start">Projects</h3>
            <hr className="w-100" />
            <p className="text-center text-lg-start">
              Most of my work lives on GitHub, and much of it starts with a
              problem I ran into myself.
            </p>
            <BtnLink
              href="https://github.com/srilakshmikanthanp?tab=repositories&sort=name"
              className="mx-auto mx-lg-0"
              target="_blank"
            >
              View on GitHub 🔎
            </BtnLink>
          </Col>
          <Col
            md={12}
            lg={5}
            className="p-3 d-flex flex-column justify-content-center order-first order-lg-last"
          >
            <Image
              src={require("./../assets/images/projects.png")}
              alt="Projects"
              style={{ maxWidth: "100%", maxHeight: "none" }}
            />
          </Col>
        </Row>
      </Container>
    </ProjectsWrapper>
  );
}
