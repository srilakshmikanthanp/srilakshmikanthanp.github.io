// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Container, Row, Col } from "react-bootstrap";
import styled from 'styled-components';
import React from 'react';

export interface ProjectProps extends React.HTMLAttributes<HTMLDivElement> {
  imgUrl  : string;
  name    : string;
  link    : string;
  tools   : string[];
}

const ProjectWrapper = styled.div`

`;

export default function Project(props: ProjectProps) {
  return (
    <ProjectWrapper>
      <Row className="justify-content-center gx-5">
        <Col lg={12}>

        </Col>
        <Col lg={12}>
        </Col>
      </Row>
    </ProjectWrapper>
  );
}
