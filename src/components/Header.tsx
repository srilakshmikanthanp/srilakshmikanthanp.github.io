// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Container, Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import me from "../assets/images/logo.png";

const Logo = styled.img`
  height        :   30px;
  width         :   30px;
  border-radius :   20px;
`;

export default function Header() {
  return (
    <Navbar sticky="top" expand="md">
      <Container fluid={true}>
        <Navbar.Brand href="#"> <Logo src={me} /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="Navbar-collapse" />
        <Navbar.Collapse id="Navbar-collapse">
          <Nav className="ms-auto">
            <Nav.Link href="#introduction">
              Introduction
            </Nav.Link>
            <Nav.Link href="#about-me">
              About Me
            </Nav.Link>
            <Nav.Link href="#tools">
              Tools
            </Nav.Link>
            <Nav.Link href="#projects">
              Projects
            </Nav.Link>
            <Nav.Link href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
