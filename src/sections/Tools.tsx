// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Container, Row, Col } from "react-bootstrap";
import Tool, { ToolProps } from "../components/Tool";
import styled from 'styled-components';
import React, { useEffect } from "react";

const ToolsWrapper = styled.div`
  background-color: var(--pri-bg-color);
  color: var(--pri-fg-color);
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ToolViewer = styled.div`
  grid-template-columns: repeat(5, 1fr);
  display: grid;
  gap: 10px;
  justify-items: center;
  align-items: center;
`;

export default function Tools() {
  // Tools and images
  const [tools, setTools]  = React.useState<Array<ToolProps>>([]);

  // effect
  useEffect(() => {
    fetch('/tools/tools.json').then(async res => setTools(await res.json()));
  });

  // Render
  return (
    <ToolsWrapper id="tools">
      <Container>
        <Row className="justify-content-center gx-5">
          <Col md={12} lg={5} className="p-3 d-flex flex-column justify-content-center" >
            <ToolViewer>
              {tools.map((tool, index) => (
                <Tool key={index} toolName={tool.toolName} src={tool.src} />
              ))}
            </ToolViewer>
          </Col>
          <Col md={12} lg={6} className="p-3 d-flex flex-column justify-content-center" >
            <h3 className="text-center text-lg-end">
              Tools
            </h3>
            <hr className="w-100" />
            <p className="text-center text-lg-end">
              I learn new things every day and I can come up with the new tool
              in a short time But I am showing recently using languages,
              frameworks and tools. I'm not Master at all but I can work with
              all of them with browser tab for docs 😂
            </p>
          </Col>
        </Row>
      </Container>
    </ToolsWrapper>
  );
}
