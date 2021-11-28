import React, { useState } from 'react'
import {css} from '@emotion/react';
import axios from 'axios';
import Aside from '../aside/Aside';

// style
import { bodyStyle } from '@/style/common/bodyStyle';

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
				<section css={asideLayout} >

				</section>
			</div>
		</div>
	)
}

const asideLayout = css`
display: flex;
width:360px;
height:100%;
`;

const divideDic = css`
display: flex;
flex-direction: row;
`;


