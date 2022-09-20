// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Project, { ProjectProps } from "../components/Project";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import React, { useEffect } from "react";

const ProjectsWrapper = styled.div`
  background-color: var(--pri-bg-color);
  color: var(--pri-fg-color);
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.header`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Body = styled.div`
  justify-content: center;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default function Projects() {
  // Tools and images
  const [projects, setProjects]  = React.useState<Array<ProjectProps>>([]);

  // effect
  useEffect(() => {
    fetch('/tools/tools.json').then(async res => setProjects(await res.json()));
  });

  // Render
  return (
    <ProjectsWrapper id="projects">
      <Container>
        <Header>
          <h3 className="text-center">Projects</h3>
        </Header>
        <Body>
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </Body>
      </Container>
    </ProjectsWrapper>
  );
}
