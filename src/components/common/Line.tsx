import { css, Theme } from '@emotion/react';
import React from 'react'

type propsType = {
  top:number;
  bottom:number;
  color:string;
}

export default function Line(props:propsType):JSX.Element {
  return (
    <div css={theme => [lineStyle, commonStyle(theme, props)]} />
  )
};

const commonStyle = (theme:Theme, {top, bottom, color}) => {

  return {
    background:theme.colors.blue300,
    opacity:0.1,
    "margin-top":top,
    "margin-bottom":bottom
  };
}

const lineStyle = css`
width:100%;
height:0.1em;
margin:0 1em;
`;


