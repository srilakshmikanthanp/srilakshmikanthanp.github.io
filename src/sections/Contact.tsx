// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Container, Row, Col } from "react-bootstrap";
import BtnLink from "../components/BtnLink";
import styled from 'styled-components';

const ContactWrapper = styled.div`
  background-color: var(--pri-bg-color);
  color: var(--pri-fg-color);
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Contact() {
  // Render
  return (
    <ContactWrapper id="contact">
      <Container>
        <Row className="justify-content-center gx-5">
          <Col md={12} lg={6} className="p-3 d-flex flex-column justify-content-center" >
            <h3 className="text-center">
              Get In Touch !
            </h3>
            <hr className="w-100" />
            <p className="text-center">
              My inbox is always open. Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
            </p>
            <BtnLink
              href="mailto:srilakshmikanthanp@gmail.com"
              className="mx-auto"
            >
              Say Hi! 😁
            </BtnLink>
          </Col>
        </Row>
      </Container>
    </ContactWrapper>
  );
}
