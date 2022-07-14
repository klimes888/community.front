import React, { MutableRefObject, useRef, useEffect, useState } from 'react';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import darkMountain from '@images/dark_mountain.png';

type Props = {
  _ref: MutableRefObject<HTMLDivElement> | null;
  position: number;
  scrollPosition: number;
};

const MOUNTAIN_VISUAL_POSITION = -700; // 달의 위치 Y값 조절
const SCROLL_OPACITY = 300; // 스크롤에 따라 opacity 변하는 시간 조절
const MOON_OPACITY = 500; // // 스크롤에 따라 "달"의 opacity 변하는 시간 조절
const WINDOW_HEIGHT = document.documentElement.clientHeight;

export default function MainParallels({
  _ref,
  position,
  scrollPosition,
}: Props) {
  // ref
  const parallelRef = useRef(null);

  // state
  const [paralelHeight, setParalelHeight] = useState(0);
  const [moonOpacity, setMoonOpacity] = useState(0);
  const [moonPosition, setMoonPosition] = useState(0);
  const [mountainPosition, setMountainPosition] = useState(0);
  const [mountainShadowPosition, setMountainShadowPosition] = useState(0);

  // state - star effect
  const [starsArr, setStarsArr] = useState([]);

  const getSize = () => {
    const height = parallelRef?.current;
    if (!height) return;
    setParalelHeight(height.clientHeight);
  };

  const moonHandler = () => {
    if ((scrollPosition - position) / SCROLL_OPACITY >= 1) {
      setMoonOpacity((scrollPosition - position - 400) / MOON_OPACITY);
    }
  };

  const flyTheMoon = () => {
    const moonCurrentY = position - scrollPosition + paralelHeight / 2;

    if (moonCurrentY <= 100) {
      setMoonPosition(100);
    } else {
      setMoonPosition(moonCurrentY);
    }
  };

  const mountainHandler = () => {
    const mountainCurrentY = -position + scrollPosition - WINDOW_HEIGHT;
    if (mountainCurrentY >= -10) {
      setMountainPosition(-10);
    } else {
      setMountainPosition(mountainCurrentY);
    }
  };

  const mountainShadowHandler = () => {
    const mountainShadowY = position - scrollPosition + paralelHeight / 2.6;
    if (mountainShadowY > -100) {
      setMountainShadowPosition(100);
    } else {
      setMountainShadowPosition(-mountainShadowY);
    }
  };

  const makeStars = () => {
    const starts = new Array(300)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          cx={Math.random() * window.innerWidth}
          cy={Math.random() * window.innerWidth}
          r={Math.random() * 0.7 + 0.6}
        />
      ));
    setStarsArr(starts);
  };

  useEffect(() => {
    makeStars();
  }, []);

  useEffect(() => {
    getSize();
  }, [parallelRef?.current]);

  useEffect(() => {
    moonHandler();
    flyTheMoon();
    mountainHandler();
    mountainShadowHandler();
  }, [scrollPosition]);

  return (
    <Layout
      ref={el => [(_ref.current = el), (parallelRef.current = el)]}
      opacity={(scrollPosition - position) / SCROLL_OPACITY}
    >
      <SkyStar>{starsArr?.map(data => data)}</SkyStar>
      <div css={layoutInner}>
        <MoonBox position={moonPosition} opacity={moonOpacity}>
          <div css={theMoon} />
          <div css={moonBright} />
        </MoonBox>
        <ImageWrap position={mountainPosition}>
          <img src={darkMountain} css={mountainImage} />
          <MountainShadow
            src={darkMountain}
            position={mountainShadowPosition}
          />
        </ImageWrap>
      </div>
    </Layout>
  );
}

const moveStar = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
  `;

const Layout = styled.div<{ opacity: number }>`
  display: flex;
  flex: 1;
  height: 500vh;
  opacity: ${({ opacity }) => opacity};
  justify-content: center;
  align-items: center;
`;

const SkyStar = styled.svg`
  position: fixed;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${moveStar} 240s linear infinite;
`;

const layoutInner = css`
  display: flex;
  flex: 1;
  /* background-color: #001d40; */
  background: linear-gradient(to bottom, #001834, #022b5c);
`;

const MoonBox = styled.div<{ position: number; opacity: number }>`
  position: fixed;
  opacity: ${({ opacity }) => opacity};
  top: ${({ position }) => position + 'px'};
  left: 50%;
  transform: translate(-50%, 0);
`;

const theMoon = css`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: orange;
  z-index: 1;
`;

const moonBright = css`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: orange;
  transform: scale(1.4);
  filter: brightness(0.6) blur(70px);
`;

// image
const ImageWrap = styled.div<{ position: number }>`
  position: fixed;
  bottom: ${({ position }) => position + 'px'};
  height: auto;
  width: 100%;

  z-index: 1;
`;

const mountainImage = css`
  object-fit: contain;
  width: 100%;
  height: auto;
`;

const MountainShadow = styled.img<{ position: number }>`
  position: absolute;
  /* top: 100px; */
  top: ${({ position }) => position + 'px'};
  left: 0;
  right: 0;
  object-fit: contain;
  width: 100%;
  height: auto;
  background-color: orange;
  transform: scale(1);
  z-index: -999;
  filter: brightness(0.5) blur(100px);
`;

// star
const Star = styled.circle`
  fill: #fff;
  stroke: none;
  stroke-width: 0;
`;
