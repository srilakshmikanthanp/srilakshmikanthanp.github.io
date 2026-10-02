// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import styled from "styled-components";

const BtnLink = styled.a`
  border: 1px solid rgb(var(--sec-bg-color));
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(var(--pri-fg-color)) !important;
  min-width: 150px;
  min-height: 50px;
  padding: 0 24px;
  width: fit-content;
  text-decoration: none;

  &:hover {
    background: rgba(var(--sec-bg-color), 0.4);
  }
`;

export default BtnLink;
