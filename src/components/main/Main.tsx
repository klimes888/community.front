import React, { useState } from 'react'
import {css} from '@emotion/react';
import axios from 'axios';
import Aside from '../aside/Aside';

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
const scrollData = [
  {index:0, thumbnail:'', title:'test', desc:'test2', date:'2020-10-10'}
];

	return (
		<div css={bodyStyle}>
			<div css={divideDic}>
				<Aside />
				<section css={bodyLayout} >
          <Header />
          <article css={boyDescWrap}>
            <HorizonScroll data={scrollData}/>
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
`;


