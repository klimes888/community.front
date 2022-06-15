import React from 'react';
import styled from '@emotion/styled';

type Props = {
  weight?: number;
};

export default function Arrow({ weight = 1 }: Props) {
  return <ArrowLayout weight={weight} />;
}

const ArrowLayout = styled.div<{ weight: number }>`
  display: block;
  width: 1em;
  height: 1em;
  border-top: ${({ weight }) => weight}px solid #000;
  border-left: ${({ weight }) => weight}px solid #000;
  transform: rotate(135deg);
  &::after {
    content: '';
    display: block;
    width: ${({ weight }) => weight}px;
    height: 1.7em;
    background-color: black;
    transform: rotate(-45deg) translate(9px, 4px);
    left: 0;
    top: 0;
  }
`;
