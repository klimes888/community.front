import { css, Theme } from '@emotion/react';
import React from 'react'
import { Link, Route } from 'react-router-dom';

type propsType = {
  data:{
    index:number,
    thumbnail:string,
    title:string,
    desc:string,
    date:string,
    type:string,
    route:string
      }
}

export default function Contents({ data }:propsType):JSX.Element {
const {thumbnail, title, desc, date, type, route} = data;

  const arr = [
    {index:1, value:'title', text:title},
    {index:2, value:'desc', text:desc},
    {index:3, value:'date', text:date},
  ];

  const DivideJSX = ():JSX.Element => (
    <div css={layoutStyle}>
      <div css={layout}>
        <div css={layoutTop}>
          <div css={thumbnailWrap}>
            <img css={thumbnailImage} src={thumbnail} />
          </div>
        </div>
        <div css={layBottom}>
          <div css={layBottomInner}>
            {
              arr?.map(({text, value, index}) => (
              <div key={index} css={textWrap}>
                <span css={theme => [themeStyle(theme, value)]}>{text}</span>
              </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
)

return (
        <div css={preventDrag}>
          <Link to={{ pathname:`${route}`}} target={type === 'href' ? '_blank' : null}>
            <DivideJSX />
          </Link>
        </div>
      )
}

  // common style
  const themeStyle = (theme:Theme, type:string):{} => {
    switch (type) {
      case 'title':
        return {
                  color:theme.colors.blue500,
                  fontSize:theme.fontsize.font16,
                  fontWeigth:theme.fontweight.font700
                };
      case 'desc':
        return {
                  color:theme.colors.blue500,
                  fontSize:theme.fontsize.font14,
                  fontWeigth:theme.fontweight.font300
                };
      case 'date':
        return {
                  color:theme.colors.blue500,
                  fontSize:theme.fontsize.font12,
                  fontWeigth:theme.fontweight.font300
                };
      default:
        break;
    }
  };

  const preventDrag = css`
  user-select:none;
  `;

const layoutStyle = css`
margin: 0 0.5em;
cursor: pointer;
`;

const layout = css`
display: flex;
flex-direction: column;
width:14em;
height:16em;
border-radius: 1em;
box-shadow: 0px 4px 10px 5px rgba(0,0,0,0.1);
overflow: hidden;
`;

const layoutTop = css`
flex:3;
`;

const layBottom = css`
flex:1;
background: #2222;
`;

const layBottomInner = css`
flex:1;
flex-direction: column;
padding:0.6em 1em;
`;

const textWrap = css`
margin:0.2em 0;
`;

// image
const thumbnailWrap = css`

`;

const thumbnailImage = css`

`;
