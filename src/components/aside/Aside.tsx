import React from 'react'
import {css} from '@emotion/react';
import { Link } from 'react-router-dom';

export default function Aside() {
  return (<>
    <aside css={theme => [bodyTheme(theme), bodyLayout]} >
      <Link to="login">login</Link><br/>
      <Link to="signup">signup</Link>
    </aside>
    {/* <text css={theme => ({...bodyTheme(theme), ...bodyLayout})}>ahahahah</text> */}
    </>
  )
};

const bodyTheme = (theme) => {
  console.log(theme)
  return { background:theme.colors.red  }
}

const bodyLayout = css`
width:300px;
`;

const test = css`
background: black;
width:100px;
height:100px;
`

