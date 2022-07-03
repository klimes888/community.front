import React from 'react';
import { css } from '@emotion/react';

import isMeImg from '@images/jap_work.png';
import ink from '@images/ink.png';
import brush from '@images/brush2.png';

export default function MainIntroduce() {
  {
    /* {new Array(4).fill(1).map((_, index) => (
    <div css={commonStyle(index)} key={index} />
  ))} */
  }
  return (
    <section css={layoutStyle}>
      <div css={flexWrap}>
        <div css={imageWrap}>
          <div css={imageWrapInner}>
            <img css={image} src={isMeImg} />
            <img css={imageShadeEffect} src={isMeImg} />
            <img css={imageInkWrap} src={ink} />
            <img css={imageBrushWrap} src={brush} />
          </div>
        </div>
      </div>
      <div css={textBox}>
        <div css={textBoxInner}>
          <h1 css={title}>FRONTEND</h1>
          <h2 css={subTitle}>DEVELOPER</h2>
          <h3 css={mynameIs}>TaeHee K.</h3>
        </div>
      </div>
    </section>
  );
}

const layoutStyle = css`
  display: flex;
  flex: 1;
`;

const flexWrap = css`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const imageWrap = css`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const imageWrapInner = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
  height: 40vw;
`;

const imageInkWrap = css`
  position: absolute;
  background: center center no-repeat;
  width: 100%;
  height: auto;
  transform: scale(1.2);
`;

const imageBrushWrap = css`
  position: absolute;
  bottom: -3em;
  left: -2em;
  width: 100%;
  height: auto;
  background: center center no-repeat;
  object-fit: contain;
  z-index: 3;
  transform: rotate(-10deg);
`;

const image = css`
  display: inline-block;
  background: center center no-repeat;
  object-fit: contain;
  width: 75%;
  transform: scaleX(-1);
  filter: brightness(1.2) grayscale(70%);
  z-index: 1;
`;

const imageShadeEffect = css`
  position: absolute;
  transform: scaleX(-1) scale(1);
  filter: brightness(0) grayscale(100%) blur(70px);
`;

// right
const textBox = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const textBoxInner = css`
  height: auto;
  padding-left: 4.5em;
`;

const title = css`
  font-size: 6vw;
  font-weight: 900;
  height: auto;
`;

const subTitle = css`
  font-size: 5vw;
  font-weight: 400;
  height: auto;
`;

const mynameIs = css`
  font-size: 5vw;
  font-weight: 100;
  height: auto;
`;
