import React from 'react';
import { css, keyframes } from '@emotion/react';

import isMeImg from '@images/jap_work.png';

export default function MainIntroduce() {
  return (
    <section css={layoutStyle}>
      <div css={layoutInner}>
        <div css={imageWrap}>
          <div css={imageWrapInner}>
            <img css={image} src={isMeImg} />
            {new Array(4).fill(null).map((_, index) => (
              <div css={commonStyle(index)} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const backAnimation = keyframes`
  0% {
    transform: translate(-10%, -10%) scale(1);
    opacity:0.5;
  }
  
  25%{
    transform: translate(10%, -10%) scale(0.8);
    opacity:0.5;
  }
  
  50% {
    transform: translate(10%, 10%) scale(1.2);
    opacity:0.8;
  }
  
  75%{
    transform: translate(-10%, 10%) scale(1.1);
    opacity:0.2;
  }
  
  100%{
    transform: translate(-10%, -10%) scale(1);
    opacity:0.5;
  }
`;

const frontAnimation = keyframes`
  0% {
    transform: translate(10%, 10%) scale(1);
    opacity:0.5;
  }
  
  25% {
    transform: translate(-10%, 10%) scale(0.8);
    opacity:0.5;
  }
  
  50%{
    transform: translate(-10%, -10%) scale(1.2);
    opacity:0.8;
  }
  
  75%{
    transform: translate(10%, -10%) scale(1.1);
    opacity:0.2;
  }
  
  100%{
    transform: translate(10%, 10%) scale(1);
    opacity:0.5;
  }
`;

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
  border: 0.1em solid #333;
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
  width: 100vw;
  height: 100vh;
`;

const layoutInner = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 40px;
`;

const imageWrap = css`
  position: relative;
  display: flex;
  width: 24em;
  height: 24em;
  border-radius: 85% 15% 89% 11% / 66% 77% 23% 34%;
  &::after,
  &::before {
    position: absolute;
    content: '';
    top: -5%;
    left: -5%;
    height: 110%;
    width: 110%;
    /* border-radius: 50%; */
    opacity: 0.5;
    filter: blur(100px);
  }
  &::after {
    background-color: #333;
    z-index: -1;
    animation: ${frontAnimation} 15s ease infinite;
  }
  &::before {
    background-color: #111;
    z-index: -2;
    animation: ${backAnimation} 15s ease infinite;
  }
`;

const imageWrapInner = css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
`;

const image = css`
  display: inline-block;
  background: url('../../assets/lion.png') center center no-repeat;
  object-fit: contain;
  width: 36em;
  height: 36em;
  transform: scaleX(-1);
  z-index: 1;
`;
