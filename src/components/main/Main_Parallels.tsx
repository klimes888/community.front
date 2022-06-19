import React from 'react';
import { css } from '@emotion/react';

export default function MainParallels() {
  return <div css={layout}></div>;
}

const layout = css`
  display: flex;
  flex: 1;
  height: 300vh;
  background-color: #001d40;
`;
