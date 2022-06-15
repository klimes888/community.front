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

const commonStyle = index => {
  switch (index) {
    case 1:
      return [line1, common];
    case 2:
      return [line2, common];
    case 3:
      return [line3, common];
    case 4:
      return [line4, common];
  }
};

const common = css`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  border: 0.1em solid #333333;
`;

const line1 = css`
  top: 0.2em;
  border-radius: 8% 92% 69% 31% / 66% 55% 45% 34%;
`;

const line2 = css`
  top: 0.4em;
  border-radius: 47% 53% 51% 49% / 74% 41% 59% 26%;
`;

const line3 = css`
  top: 0.2em;
  border-radius: 37% 63% 26% 74% / 95% 57% 43% 5%;
`;

const line4 = css`
  top: 0.4em;
  border-radius: 82% 18% 12% 88% / 36% 57% 43% 64%;
`;

const layoutStyle = css`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const flexWrap = css`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const imageWrap = css`
  position: relative;
  display: flex;
  width: 24em;
  height: 24em;
`;

const imageWrapInner = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const imageInkWrap = css`
  position: absolute;
  display: inline-block;
  background: center center no-repeat;
  object-fit: contain;
  width: 42em;
  height: 42em;
`;

const imageBrushWrap = css`
  position: absolute;
  bottom: -5em;
  left: -6em;
  width: 40em;
  height: auto;
  background: center center no-repeat;
  object-fit: contain;
  z-index: 9;
  transform: rotate(-10deg);
`;

const image = css`
  display: inline-block;
  background: center center no-repeat;
  object-fit: contain;
  width: 34em;
  height: 34em;
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
  padding-left: 2em;
`;

const title = css`
  font-size: 6em;
  font-weight: 900;
  height: auto;
`;

const subTitle = css`
  font-size: 6em;
  font-weight: 400;
  height: auto;
`;

const mynameIs = css`
  font-size: 5em;
  font-weight: 100;
  height: auto;
`;
