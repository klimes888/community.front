import React, { useState } from 'react';
import { css, Theme } from '@emotion/react';
import axios from 'axios';
import Aside from '../aside/Aside';
import Top from '../top/Top';

// json
import mainData from '@/data/main.json';

// style
import { bodyStyle } from '@/style/common/bodyStyle';
import Header from '../header/Header';

// components
import SquareButton from '../buttons/squareButton';
import Contents from '../slider/Contents';
import HorizonScroll from '../slider/HorizonScroll';
import Line from '../common/Line';
import Main_Portfolio from './Main_Portfolio';

export default function Main() {
  const [data, setData] = useState(undefined);
  // const fetch = () => {
  //     axios({
  //         method:'get',
  //         url:`${process.env.COMMUNITY_API}api`,
  //         headers:{
  //             "Access-Control-Allow-Origin": "*",
  //         }
  //     }).then((test) => setData(test))
  //     .catch( err => console.log(err))
  // }

  // useEffect(() => {
  //     fetch();
  // }, []);

  const dataArr = [
    {
      index: 0,
      desc: '포트폴리오',
      type: 'HorizonScroll',
      JSX: <HorizonScroll data={mainData} />,
    },
    {
      index: 1,
      desc: '커뮤니티',
      type: 'Community',
      JSX: <Main_Portfolio data={[]} />,
    },
  ];

  return (
    <div css={bodyStyle}>
      <div css={divideDic}>
        {/* <Top /> */}
        <section css={bodyLayout}>
          <article css={boyDescWrap}>
            <div css={bodyInner}>
              {/* {dataArr?.map(({ index, desc, type, JSX }) => (
                <React.Fragment key={index}>
                  <div css={textWrap}>
                    <h2 css={theme => textCommon(theme)}>{desc}</h2>
                  </div>
                  <div css={theme => jsxWrap(theme, type)}>{JSX}</div>
                  <div css={lineWrapStyle}>
                    <Line top={60} bottom={30} color={'blue'} />
                  </div>
                </React.Fragment>
              ))} */}
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

const jsxWrap = (theme: Theme, type: string) => {
  if (type !== 'HorizonScroll') {
    return {
      margin: '0 1em',
    };
  }
};

const textCommon = (theme: Theme) => {
  return {
    color: theme.colors.blue500,
    'font-size': theme.fontsize.font18,
  };
};

const textWrap = css`
  padding: 2rem 2.5rem;
`;

const divideDic = css`
  flex: 1;
`;

const bodyLayout = css`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const boyDescWrap = css`
  display: flex;
  flex: 1;
`;

const bodyInner = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const lineWrapStyle = css`
  display: flex;
  flex: 1;
  margin: 2rem 0em;
`;

// text
