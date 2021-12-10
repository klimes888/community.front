import { css } from '@emotion/react';
import React, { useEffect, useRef, useState } from 'react'
import { props } from 'types/slider';
import Contents from './Contents';


export default function HorizonScroll({ data }:props):JSX.Element {
  // ref
  const scrollWrap = useRef<HTMLDivElement>(null)
  const scroll = useRef<HTMLDivElement>(null)


  const [currentUp, setCurrentUp] = useState(0);
  const [scrollMove, setScrollMove] = useState(0);

  // size
  const [wrapWidth, setWrapWidth] = useState(null);
  const [scrollWidth, setScrollWidth] = useState(null);
  const [saveMove, setSaveMove] = useState(0);

  let isMouse = false
  let currentDistance = 0
  let saveSize = 0
  let diff = 0


  useEffect(() => {
    setWrapWidth(scrollWrap?.current?.offsetWidth);
    setScrollWidth(scroll?.current?.offsetWidth);
  }, []);

  const scrollDownhandler = (e) => {
    isMouse = true
    currentDistance = e?.pageX

  }
  const scrollMovehandler = (e) => {
    if(!isMouse) return;
    diff = currentDistance - e?.pageX;
    setScrollMove(-diff + saveSize)
  }

  const scrollUpHandler = (e) => {
    isMouse = false
    // setSaveMove(-diff + saveMove);
    saveSize += -diff

    if(wrapWidth > scrollWidth){
      saveSize = 0;
      setScrollMove(0)
    }
  }


  useEffect(() => {
    const div = scrollWrap?.current;
    div.addEventListener('mousedown', scrollDownhandler, false);
    document.addEventListener('mousemove', scrollMovehandler, false);
    document.addEventListener('mouseup', scrollUpHandler, false);
    return () => {
      div.addEventListener('mousedown', scrollDownhandler, false);
      document.addEventListener('mousemove', scrollMovehandler, false);
      document.addEventListener('mouseup', scrollUpHandler, false);
      };

  }, [isMouse, wrapWidth, scrollWidth])

  // console.log(scrollMove)

  const arr = new Array(20).fill('a').map((d,i)=>++i)


  return (
    <div
      ref={scrollWrap}
      css={layout}
    >
      <div
        ref={scroll}
        css={[innerLayout, {transform:`translateX(${scrollMove}px)`}]}
      >
        {
          arr?.map((_data, index) =>
            <React.Fragment key={index}>
              <Contents data={_data} />
            </React.Fragment>
          )
        }
      </div>
    </div>
  )
}


const layout = css`
  display: flex;
  width:100vw;
  height:auto;
  background: red;
`;

const innerLayout = css`
display: flex;
flex:1;
flex-direction: row;
margin:0 1em;
background: blue;
flex-wrap: nowrap;
`;
