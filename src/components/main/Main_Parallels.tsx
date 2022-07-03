import React, { MutableRefObject } from 'react';
import { css } from '@emotion/react';

type Props = {
  _ref: MutableRefObject<HTMLDivElement> | null;
};
export default function MainParallels({ _ref }: Props) {
  return <div css={layout} ref={_ref}></div>;
}

const layout = css`
  display: flex;
  flex: 1;
  height: 300vh;
  background-color: #001d40;
`;
