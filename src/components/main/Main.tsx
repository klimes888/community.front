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
    // }, [])

    return (
        <div css={mainStyle}>
            test, {data}
            <Link to="login">login</Link><br/>
            <Link to="signup">signup</Link>
        </div>
    )
}

const mainStyle = css`
color:red;
`;
