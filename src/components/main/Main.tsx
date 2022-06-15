import React, { useState } from 'react';
import { css, Theme } from '@emotion/react';

// json
import mainData from '@/data/main.json';

// style
import { bodyStyle } from '@/style/common/bodyStyle';
import Header from '../header/Header';

// components
import MainIntroduce from './Main_Introduce';
import HorizonScroll from '../slider/HorizonScroll';
import Arrow from '@/components/UI/Arrow';

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

  return (
    <div css={bodyStyle}>
      <div css={divideDic}>
        <section css={bodyLayout}>
          <MainIntroduce />
        </section>
        <button css={textButton}>
          <span css={spanText}>Next Scroll</span>
          <Arrow weight={1} />
        </button>
      </div>
    </div>
  );
}

const divideDic = css`
  position: relative;
  display: flex;
  width: 100%;
`;

const bodyLayout = css`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// text

// button
const textButton = css`
  position: fixed;
  display: flex;
  bottom: 11em;
  right: 0.8em;
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
