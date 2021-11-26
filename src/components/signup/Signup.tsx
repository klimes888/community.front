import { css } from '@emotion/react';
import axiosFetch from '@/hooks/axiosFetch';
import { useState } from 'react'

export default function Signup() {
    // fetch
    const _fetch = axiosFetch()
    const [signupData, setSignupData] = useState({email:'', password:'', repassword:'', name:''})

    const inputArr = [
        {index:0, type:'email', placeHolder:'이메일', style:inputStyle, name:'email'},
        {index:1, type:'password', placeHolder:'비밀번호', style:inputStyle, name:'password'},
        {index:2, type:'password', placeHolder:'비밀번호 확인', style:inputStyle, name:'repassword'},
        {index:3, type:'name', placeHolder:'닉네임', style:inputStyle, name:'name'}
    ]

    const signupHandler = () => {
        // console.log(signupData);
        _fetch('post', 'signup', signupData, null);
    }

    return (
        <article css={Layout}>
            { inputArr?.map( ({index, type, placeHolder, style, name }) =>
            <input key={index} type={type} placeholder={placeHolder} css={style} onChange={e => setSignupData({...signupData, [name]:e.target.value})} />
            )}
            <button onClick={signupHandler}>회원가입!</button>
        </article>
    )
}

const Layout = css `
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