import React from 'react';
import {jsx, css} from '@emotion/react';

export default function Login() {
    return (
        <div css={layout}>
            <input type="text" css={inputStyle}/>
            <input type="text" css={inputStyle}/>
            <button>login!</button>
        </div>
    )
}

const layout = css `
    display: flex;
    height:100vh;
    flex:1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const inputStyle = css `
margin:0.5em 0;
`;

