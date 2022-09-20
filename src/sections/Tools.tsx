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
  const tools: Array<{ toolName: string, toolLogo: string }> = [
    {
      toolName: "C",
      toolLogo: "https://img.icons8.com/color/48/000000/c-programming.png"
    },
    {
      toolName: "C++",
      toolLogo: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
    },
    {
      toolName: "NASM",
      toolLogo: "https://www.nasm.us/images/nasm.png"
    },
    {
      toolName: "Java",
      toolLogo: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"
    },
    {
      toolName: "Kotlin",
      toolLogo: "https://img.icons8.com/color/48/000000/kotlin.png"
    },
    {
      toolName: "Golang",
      toolLogo: "https://img.icons8.com/color/48/000000/golang.png"
    },
    {
      toolName: "Python",
      toolLogo: "https://img.icons8.com/color/48/000000/python.png"
    },
    {
      toolName: "Nodejs",
      toolLogo: "https://img.icons8.com/color/48/000000/nodejs.png"
    },
    {
      toolName: "HTML",
      toolLogo: "https://img.icons8.com/color/48/000000/html-5--v1.png"
    },
    {
      toolName: "CSS",
      toolLogo: "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
      toolName: "JavaScript",
      toolLogo: "https://img.icons8.com/color/48/000000/javascript--v1.png"
    },
    {
      toolName: "TypeScript",
      toolLogo: "https://img.icons8.com/color/48/000000/typescript.png"
    },
    {
      toolName: "MySQL",
      toolLogo: "https://img.icons8.com/color/48/000000/mysql-logo.png"
    },
    {
      toolName: "Bootstrap",
      toolLogo: "https://img.icons8.com/color/48/000000/bootstrap.png"
    },
    {
      toolName: "JQuery",
      toolLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/JQuery_logo.svg/524px-JQuery_logo.svg.png"
    },
    {
      toolName: "JQuery UI",
      toolLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/JQuery_UI-Logo.svg/512px-JQuery_UI-Logo.svg.png"
    },
    {
      toolName: "Swing",
      toolLogo: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"
    },
    {
      toolName: "Javafx",
      toolLogo: "https://upload.wikimedia.org/wikipedia/en/c/cc/JavaFX_Logo.png"
    },
    {
      toolName: "React",
      toolLogo: "https://img.icons8.com/color/48/000000/react-native.png"
    },
    {
      toolName: "Redux",
      toolLogo: "https://img.icons8.com/color/48/000000/redux.png"
    },
    {
      toolName: "React Router",
      toolLogo: "https://seeklogo.com/images/R/react-router-logo-AB5BFB638F-seeklogo.com.png"
    },
    {
      toolName: "Flask",
      toolLogo: "https://img.icons8.com/color/48/000000/flask.png"
    },
    {
      toolName: "Expressjs",
      toolLogo: "https://img.icons8.com/color/48/000000/express.png"
    },
    {
      toolName: "Git",
      toolLogo: "https://img.icons8.com/color/48/000000/git.png"
    },
    {
      toolName: "Github",
      toolLogo: "https://img.icons8.com/color/48/000000/github--v1.png"
    },
    {
      toolName: "VScode",
      toolLogo: "https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"
    },
    {
      toolName: "Docker",
      toolLogo: "https://img.icons8.com/color/48/000000/docker.png"
    },
    {
      toolName: "Linux",
      toolLogo: "https://img.icons8.com/color/48/000000/linux--v1.png"
    },
    {
      toolName: "TimescaleDB",
      toolLogo: "https://www.timescale.com/static/170c20ad89a8d3596d754d8ed6f5cb22/TimescaleLogoSocialMedia1Svg.svg"
    },
    {
      toolName: "PostgreSQL",
      toolLogo: "https://img.icons8.com/color/48/000000/postgreesql.png"
    }
  ];

  // Render
  return (
    <ToolsWrapper id="tools">
      <Container>
        <Row className="justify-content-center gx-5">
          <Col md={12} lg={5}
            className="p-3 d-flex flex-column justify-content-center"
          >
            <ToolViewer>
              {tools.map((tool, index) => (
                <Tool key={index} toolName={tool.toolName} src={tool.toolLogo} />
              ))}
            </ToolViewer>
          </Col>
          <Col md={12} lg={6}
            className="p-3 d-flex flex-column justify-content-center"
          >
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
