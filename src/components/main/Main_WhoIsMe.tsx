import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

// image
import html5 from '@/assets/langs/html5logo.png';
import css3 from '@/assets/langs/css3logo.png';
import javascript from '@/assets/langs/jslogo.png';
import nextjs from '@/assets/langs/nextjslogo.png';
import reactjs from '@/assets/langs/reactlogo.png';
import styledcomponent from '@/assets/langs/styledcomponentlogo.png';
import emotionLogo from '@/assets/langs/emotion.png';
import mobXLogo from '@/assets/langs/mobxlogo.png';
import rn from '@/assets/langs/rnlogo.png';

export default function MainWhoIsMe() {
  // grid 형식의 insta segment 포트폴리오
  // 화면 전체 흐림 효과와 텍스트 효과
  const designArr = [
    {
      color: '#9b00dc',
      image: '',
      spanColumn: '1 / span 2',
      spanRow: '1 / span 2',
      text: 'This is My Skills',
    },
    {
      color: '#F97C43',
      image: <img css={logImages} src={html5} />,
      spanColumn: '',
      spanRow: '',
      text: '',
    },
    {
      color: '#3959D6',
      image: <img css={logImages} src={css3} />,
      spanColumn: '',
      spanRow: '',
      text: '',
    },
    {
      color: '#ffb34b',
      image: <img css={logImages} src={javascript} />,
      spanColumn: '',
      spanRow: '',
      text: '',
    },
    {
      color: '#ffffff',
      image: <img css={generalImages} src={nextjs} />,
      spanColumn: '',
      spanRow: '',
      text: '',
    },
    {
      color: '#E34847',
      image: '',
      spanColumn: '4 / span 2',
      spanRow: '',
      text: '',
    },
    {
      color: '#F9D4C9',
      image: <img css={generalImages} src={styledcomponent} />,
      spanColumn: '',
      spanRow: '',
      text: '',
    },
    {
      color: '#109ab4',
      image: <img css={generalImages} src={reactjs} />,
      spanColumn: '',
      spanRow: '',
      text: '',
    },
    {
      color: '#1e2029',
      image: <img css={generalImages} src={emotionLogo} />,
      spanColumn: '',
      spanRow: '',
      text: '',
    },
    {
      color: '',
      image: <img css={generalImages} src={mobXLogo} />,
      spanColumn: '',
      spanRow: '',
      text: '',
      type: 'mobx',
    },
    {
      color: '#0b9bc8',
      image: <img css={generalImages} src={rn} />,
      spanColumn: '',
      spanRow: '',
      text: '',
    },
  ];

  return (
    <article css={layout}>
      <section css={gridLayout}>
        {designArr?.map(
          ({ color, image, spanColumn, spanRow, text, type = '' }, index) => (
            <GridItem
              key={index}
              spanColumn={spanColumn}
              spanRow={spanRow}
              color={color}
              type={type}
            >
              {image}
              <span css={font}>{text}</span>
            </GridItem>
          ),
        )}
      </section>
    </article>
  );
}

const layout = css`
  flex: 1;
`;

const gridLayout = css`
  display: grid;
  gap: 0.5em;
  padding: 0.5em;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: minmax(3em, auto);
`;

const font = css`
  font-size: 3vw;
  color: white;
`;

const generalImages = css`
  object-fit: contain;
  width: 7vw;
  height: 7vw;
`;

const logImages = css`
  object-fit: contain;
  width: 4vw;
  height: 4vw;
`;

const GridItem = styled.div<{
  spanColumn: string;
  spanRow: string;
  color: string;
  type: string;
}>`
  display: grid;
  place-content: center;
  background-color: ${({ color }) => color || '#ffffff'};
  grid-column: ${({ spanColumn }) => spanColumn};
  grid-row: ${({ spanRow }) => spanRow};
  ${({ type }) => type && 'border:1px solid #ED681B'}
`;
