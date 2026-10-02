// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Container, Row, Col } from "react-bootstrap";
import Image from "../components/Image";
import styled from "styled-components";

const ToolsWrapper = styled.div`
  background-color: var(--pri-bg-color);
  color: var(--pri-fg-color);
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Tools() {
  // Render
  return (
    <ToolsWrapper id="tools">
      <Container>
        <Row className="justify-content-center gx-5">
          <Col
            md={12}
            lg={5}
            className="p-3 d-flex flex-column justify-content-center order-first order-lg-first"
          >
            <Image
              src={require("./../assets/images/tools.png")}
              alt="Tech Stacks"
              style={{ maxWidth: "100%", maxHeight: "none" }}
            />
          </Col>
          <Col
            md={12}
            lg={6}
            className="p-3 d-flex flex-column justify-content-center"
          >
            <h3 className="text-center text-lg-start">Tools</h3>
            <hr className="w-100" />
            <p className="text-center text-lg-start">
              I don't tie myself to any particular tool. When a problem comes
              up, I look for the best tool or approach to solve it, and if
              nothing fits, I build what I need.
            </p>
          </Col>
        </Row>
      </Container>
    </ToolsWrapper>
  );
}
