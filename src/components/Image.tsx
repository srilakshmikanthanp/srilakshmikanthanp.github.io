// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import styled, { keyframes } from "styled-components";
import React from "react";

const ZoomInOutAnimation = keyframes`
  0% {
    transform: scale(1.0);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1.0);
  }
`;

const ImageWrapper = styled.img`
  max-height: min(320px, 100%);
  max-width: min(320px, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  border-radius: 25px;
  box-shadow: 0 0 10 rgba(var(--shadow-color));

  &:hover {
    animation: ${ZoomInOutAnimation} ease-in 0.5s;
  }
`;

export default function Image(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <ImageWrapper {...props} />
  );
}
