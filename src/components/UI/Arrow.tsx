import React from 'react';
import styled from '@emotion/styled';

type Props = {
  weight?: number;
  color: string;
};

export default function Arrow({ weight = 1, color = '#ffffff' }: Props) {
  return <ArrowLayout weight={weight} color={color} />;
}

const ArrowLayout = styled.div<{ weight: number }>`
  display: block;
  width: 1em;
  height: 1em;
  border-top: ${({ weight, color }) => `${weight}px solid ${color}`};
  border-left: ${({ weight, color }) => `${weight}px solid ${color}`};
  transform: rotate(135deg);
  &::after {
    content: '';
    display: block;
    width: ${({ weight }) => weight}px;
    height: 1.7em;
    background-color: ${({ color }) => color};
    transform: rotate(-45deg) translate(9px, 4px);
    left: 0;
    top: 0;
  }
`;
