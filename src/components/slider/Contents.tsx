import { css, jsx, Theme } from '@emotion/react';
import React from 'react'

export default function Contents({ data }):JSX.Element {

  return (
    <button css={layoutStyle}>
        <div css={layout}>
        <div css={layoutTop}></div>
        <div css={layBottom}>
          <div css={layBottomInner}>
            <span css={theme => [titleText, themeStyle(theme, 'text')]}>안녕하세여ㅛ</span>
          </div>
        </div>
      </div>
    </button>
  )
}

  // common style
  const themeStyle = (theme:Theme, type:string):{} => {
    switch (type) {
      case 'text':
        return {
                  color:theme.colors.blue500,
                  fontSize:theme.fontsize.font15,
                  fontWeigth:theme.fontweight.font700
                }
      default:
        break;
    }
  };

const layoutStyle = css`
margin: 0 0.5em;
`;

const layout = css`
display: flex;
flex-direction: column;
width:14em;
height:16em;
border-radius: 1.5em;
box-shadow: 0px 4px 10px 5px rgba(0,0,0,0.1);
overflow: hidden;
`;

const layoutTop = css`
flex:2;
`;

const layBottom = css`
flex:1;
background: #2222;
`;

const layBottomInner = css`
flex:1;
padding:1em;
`;

const titleText = css`
font
`;