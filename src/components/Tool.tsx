// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import React from 'react';

interface ToolProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  toolName: string;
}

const ToolWrapper = styled.img`
  max-height: min(50px, 100%);
  max-width: min(50px, 100%);
  cursor: pointer;

  &:hover {
    filter: brightness(1.2) drop-shadow(0 0 10px rgba(var(--animee-color)));
  }
`;

export default function Tool(props: ToolProps) {
  return (
    <React.Fragment>
      <ToolWrapper {...props} data-tip={props.toolName}/>
      <ReactTooltip place='bottom' effect='solid' />
    </React.Fragment>
  )
}
