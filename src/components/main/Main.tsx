import React, { useEffect, useState } from 'react'
import {jsx, css} from '@emotion/react';
import axios from 'axios';

export default function Main() {
    const [data, setData] = useState(null);
    
    const fetch = () => {
        axios({
            method:'get',
            url:'/posts',
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
            test
        </div>
    )
}

const mainStyle = css`
color:red;
`;
