import React from 'react';
import { css } from '@emotion/react';

export default function FirstLanding() {
  return <section css={LayoutInner}></section>;
}

const LayoutInner = css`
  display: flex;
  flex: 1;
  background: wheat;
`;
