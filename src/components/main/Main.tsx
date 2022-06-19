import React, { useState } from 'react';
import { css } from '@emotion/react';

// json

// style
import { bodyStyle } from '@/style/common/bodyStyle';

// components
import MainIntroduce from './Main_Introduce';
import MainParallels from './Main_Parallels';
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
        <div css={secetionDivide}>
          <MainIntroduce />
        </div>
        <div css={secetionDivide}>
          <MainParallels />
        </div>
        <button css={textButton}>
          <span css={spanText}>Next Scroll</span>
          <Arrow weight={1} />
        </button>
      </div>
    </div>
  );
}

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
