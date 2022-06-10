import React from 'react'
import {css} from '@emotion/react';

type Props = {
onClick:()=>void;
content:JSX.Element;
}

export default function SquareButton({
  onClick,
  content
}:Props):JSX.Element {
  return (
    <button
      css={buttonStyle}
      onClick={onClick}
    >
      { content }
    </button>
  )
}

const buttonStyle = css`
  display: flex;
  width:2.5em;
  height:2.5em;
  border-radius:0.4em;
  overflow: hidden;
  cursor: pointer;
`;