import React, { useState } from 'react';
import {css} from '@emotion/react';
import axiosFetch from '@/hooks/axiosFetch';

export default function Login() {
        // fetch
        const _fetch = axiosFetch()

    const [userInform, setUserInform] = useState({id:'', password:''});

    const onchangeHandler = (e) => {
        const {target} = e
        setUserInform({...userInform, [target?.name]:target.value})
    }

    const sendDataHandler = () => {
        console.log(userInform);
        _fetch('post', 'login', userInform, null);
    }

    return (
        <div css={layout}>
            <input
                type="text"
                css={inputStyle}
                value={userInform?.id}
                name='userId'
                onChange={e => onchangeHandler(e)}
            />
            <input
                type="password"
                css={inputStyle}
                value={userInform?.password}
                name='password'
                onChange={ e => onchangeHandler(e)}
            />
            <button onClick={sendDataHandler}>login!</button>
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

