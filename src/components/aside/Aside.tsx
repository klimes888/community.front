import React from 'react'
import {css, Theme} from '@emotion/react';
import styled from "@emotion/styled"
import { Link } from 'react-router-dom';

export default function Aside() {

  const linkList = [
    {index:0, title:'Home', value:''},
    {index:1, title:'Portfolio', value:''},
    {index:2, title:'Community', value:''},
    {index:3, title:'Connect', value:''}
  ]



  return (
    <aside css={theme => ([themeStyle(theme, 'bar'), bodyLayout])} >
      <article css={bodyTop}>

      </article>
      <article css={bodyInner}>
      {
        linkList?.map(({ index, title, value }) =>
          <TextWrap to={value} key={index} >
            <text css={theme => [themeStyle(theme, 'text'), texttyle]}>{title}</text>
          </TextWrap>
        )
      }
      </article>
    </aside>

  )
};

  // common style
  const themeStyle = (theme:Theme, type:string):{} => {
    switch (type) {
      case 'bar':
        return {
                  background:theme.colors.blue500
                }
      case 'text':
        return {
                  color:theme.colors.white,
                  fontSize:theme.fontsize.font18,
                  fontWeight:theme.fontweight.font500,
                }
      default:
        break;
    }
  };

  // layout

const bodyLayout = css`
display: flex;
flex-direction: column;
width:300px;
height:100vh;
`;

const bodyTop = css`
display: flex;
padding: 1.5rem;
border-bottom:1px solid #ffffff;
`;

const bodyInner = css`
flex:1;
flex-direction: column;
padding:0.5rem 1rem;
`;

const TextWrap = styled(Link)`
display: flex;
padding:0.5em;
margin: 0.5em 0;
`;

const texttyle = css`
`;

