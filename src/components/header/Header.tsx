import React from 'react';
import { css, Theme } from '@emotion/react';
// import SquareButton from '../buttons/squareButton';

export default function Header() {
  // const moreButtonHandler = (type: string) => {
  //   console.log(type);
  // };

  return (
    <header css={layoutStyle}>
      <div css={layoutInner}>
        <div css={buttonWrap}>
          {/* <SquareButton
            onClick={() => moreButtonHandler('more')}
            content={
              <div css={theme => [commonTheme(theme, 'wrap'), hamburgerWrap]}>
                <div css={theme => [commonTheme(theme, 'inner'), hamburger]} />
              </div>
            }
          /> */}
        </div>
      </div>
    </header>
  );
}

const commonTheme = (theme: Theme, type: string) => {
  if (type === 'inner') {
    return {
      background: theme.colors.white,
      '&::before': {
        background: theme.colors.white,
      },
      '&::after': {
        background: theme.colors.white,
      },
    };
  } else {
    return {
      background: theme.colors.blue500,
    };
  }
};

const layoutStyle = css`
  display: flex;
  width: 100%;
  height: 3.5rem;
`;

const layoutInner = css`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

const buttonWrap = css`
  padding: 0 0.5rem;
  margin-right: 1rem;
`;

const hamburgerWrap = css`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const hamburger = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100;
  height: 0.1em;
`;
