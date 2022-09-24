// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { getFeather } from "../utilities/functions";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  max-height: 100px;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <div className="d-flex justify-content-center">
          <a href="https://www.instagram.com/srilakshmikanthanp/" className="p-2">
            <img src={getFeather("instagram")} alt="Mail" />
          </a>
          <a href="mailto:srilakshmikanthanp@gmail.com" className="p-2">
            <img src={getFeather("mail")} alt="Mail" />
          </a>
          <a href="https://github.com/srilakshmikanthanp" className="p-2">
            <img src={getFeather("github")} alt="Mail" />
          </a>
          <a href="https://twitter.com/itsmekanth" className="p-2">
            <img src={getFeather("twitter")} alt="Mail" />
          </a>
          <a href="https://www.facebook.com/srilakshmikanthanp" className="p-2">
            <img src={getFeather("facebook")} alt="Mail" />
          </a>
        </div>
        <div className="d-flex justify-content-center">
          <p className="p-2">
            Copyright &copy; {new Date().getFullYear()} Sri Lakshmi Kanthan
          </p>
        </div>
      </Container>
    </FooterWrapper>
  );
}
