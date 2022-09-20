// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import React from 'react';

interface ToolProps extends React.HTMLAttributes<HTMLImageElement> {
  toolName: string;
}

const ToolWrapper = styled.img`
  max-height: min(50px, 100%);
  max-width: min(50px, 100%);
`;

export default function Tool(props: ToolProps) {
  return (
    <React.Fragment>
      <ReactTooltip offset={{bottom: -2}} place='bottom' effect='solid' />
      <ToolWrapper {...props} data-tip={props.toolName}/>
    </React.Fragment>
  )
}
