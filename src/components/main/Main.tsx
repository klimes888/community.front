/** @jsx jsx */
import React, { useEffect, useState } from 'react'
import {jsx, css} from '@emotion/react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <div css={mainStyle}>
            <aside css={asideLayout}>
                <text css={theme => ({color:theme.colors.white})}>안녕</text>
            <Link to="login">login</Link><br/>
            <Link to="signup">signup</Link>

            </aside>
        </div>
    )
}

const mainStyle = css``;

const asideLayout = css`
display: flex;
width:360px;
height:100%;
`;

const textstyle = css`
`

