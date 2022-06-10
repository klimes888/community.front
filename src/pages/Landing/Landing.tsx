import { css } from '@emotion/react';
import React from 'react';
import FirstLanding from './FirstLanding';

export default function Landing(): JSX.Element {
  const AnimationList = [{ index: 0, type: 'first', JSX: FirstLanding }];

  return (
    <main css={Layout}>
      {AnimationList?.map(({ index, type, JSX }) => (
        <React.Fragment key={index}></React.Fragment>
      ))}
    </main>
  );
}

const Layout = css`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
