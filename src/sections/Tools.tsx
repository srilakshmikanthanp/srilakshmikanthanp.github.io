// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Container, Row, Col } from "react-bootstrap";
import styled from 'styled-components';
import { Tool } from "../components";

const ToolsWrapper = styled.div`
  background-color: var(--pri-bg-color);
  color: var(--pri-fg-color);
  padding: 80px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Tools() {
  return (
    <ToolsWrapper id="tools">
      <Container>
        <Row className="justify-content-center gx-5">
          <Col md={12} lg={5}
            className="p-3 d-flex flex-column align-items-center justify-content-center"
          >
          </Col>
          <Col md={12} lg={6}
            className="p-3 d-flex flex-column align-items-end justify-content-center"
          >
            <h3 className="text-lg-end text-md-center">
              Tools
            </h3>
            <hr className="w-100" />
            <p className="text-lg-end text-md-center">
              I learn new things every day and I can come up with the new tool in a short time
              But I am showing recently using languages, frameworks and tools. I'm not Master
              at all but I can work with all of them with browser tab for docs 😂
            </p>
          </Col>
        </Row>
      </Container>
    </ToolsWrapper>
  );
}
