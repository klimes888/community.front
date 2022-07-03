import React, { useRef, useEffect, useState, useMemo } from 'react';
import { css } from '@emotion/react';

// json

// style
import { bodyStyle } from '@/style/common/bodyStyle';

// components
import MainIntroduce from './Main_Introduce';
import MainParallels from './Main_Parallels';
import MainWhoIsMe from './Main_WhoIsMe';
import Arrow from '@/components/UI/Arrow';
import addAnimation from '@/hooks/addAnimation';

// hooks
import IntersectionObserverHook from '@/hooks/IntersectionObserverHook';

export default function Main() {
  const { ref, trigger } = addAnimation();
  const parallel = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const observe = IntersectionObserverHook({
    root: parallel,
    threshold: 0.35,
  });
  console.log('trigger>>', trigger);
  // state
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [nextScrollBtn, setNextScrollBtn] = useState('#ffffff');

  // static
  const windowHiehgt = useMemo(() => document.documentElement.clientHeight, []);
  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    // view current height
    const height = document.documentElement.scrollHeight;
    setScrollHeight(height);

    // view current scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!parallel.current) return;
    const parallelHeight = parallel.current.clientHeight;
    const buttonRefHeight = buttonRef.current.clientWidth;
    if (scrollPosition >= buttonRefHeight) {
      setNextScrollBtn('#ffffff');
    } else if (buttonRefHeight + scrollPosition - 80 <= buttonRefHeight) {
      setNextScrollBtn('#001d40');
    }
  }, [parallel, scrollPosition]);

  return (
    <div css={bodyStyle}>
      <div css={divideDic}>
        {/* 메인 소개 */}
        <div css={secetionDivide}>
          <MainIntroduce />
        </div>
        {/* 개인 소개글(경력 위주) */}
        <div css={secetionDivide} ref={ref}>
          <MainWhoIsMe />
        </div>
        {/* <div css={secetionDivide}>
          <MainParallels _ref={parallel} />
        </div> */}
        {/* 개발 스택 */}
        {/* 포트폴리오 소개 */}
        {/* Contact */}
        <button css={textButton} ref={buttonRef}>
          <span
            css={() => [
              styleManger({ type: 'scroll', value: nextScrollBtn }),
              spanText,
            ]}
          >
            Next Scroll
          </span>
          <Arrow weight={1} color={nextScrollBtn} />
        </button>
      </div>
    </div>
  );
}

const styleManger = ({ type, value }) => {
  switch (type) {
    case 'scroll':
      return {
        color: value,
      };

    default:
      break;
  }
};

const divideDic = css`
  display: block;
  width: 100%;
`;

const secetionDivide = css`
  display: flex;
  flex: 1;
`;

// text

// button
const textButton = css`
  position: fixed;
  display: flex;
  bottom: 12em;
  right: 1.5em;
  height: auto;
  justify-content: center;
  align-items: center;
  transform: translate(100%) rotate(90deg);
  transform-origin: 0% 0%;
`;

const spanText = css`
  font-size: 1.4em;
  letter-spacing: 0.2em;
  margin-right: 0.8em;
`;
