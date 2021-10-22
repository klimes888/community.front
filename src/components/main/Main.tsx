import React, { useEffect, useState } from 'react'
import {jsx, css} from '@emotion/react';
import axios from 'axios';

export default function Main() {
    const [data, setData] = useState(undefined);
    console.log(process.env.COMMUNITY_API)

    const fetch = () => {
        axios({
            method:'get',
            url:`${process.env.COMMUNITY_API}`,
            headers:{
                "Access-Control-Allow-Origin": "*",
            }
        }).then((test) => setData(test))
        .catch( err => console.log(err))
    }

    useEffect(() => {
        fetch();
    }, [])

    return (
        <div css={mainStyle}>
            test, {data}
        </div>
    )
}

const mainStyle = css`
color:red;
`;
