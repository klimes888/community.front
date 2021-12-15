import React, { useState } from 'react'
import {css} from '@emotion/react';
import axios from 'axios';
import Aside from '../aside/Aside';
// json
import mainData from '@/data/main.json'

// style
import { bodyStyle } from '@/style/common/bodyStyle';
import Header from '../header/Header';

// components
import SquareButton from '../buttons/squareButton';
import Contents from '../slider/Contents';
import HorizonScroll from '../slider/HorizonScroll';

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
				<Aside />
				<section css={bodyLayout} >
          <Header />
          <article css={boyDescWrap}>
            <div css={bodyInner} >
              <HorizonScroll data={mainData}/>
              <div css={lineWrapStyle} >
                <div css={lineStyle} />
              </div>
            </div>
          </article>
				</section>
			</div>
		</div>
	)
}

const divideDic = css`
display: flex;
flex:1;
`;

const bodyLayout = css`
display: flex;
flex-direction: column;
flex:1;
`;


const boyDescWrap = css`
width:100%;
`;

const bodyInner = css`
display: flex;
flex-direction: column;
width:100%;
`;

const lineWrapStyle = css`
display: flex;
flex:1;
margin:2rem 0em;
`;

const lineStyle = css`
width:100%;
height:0.1em;
background: red;
margin:0 1em;
`;


