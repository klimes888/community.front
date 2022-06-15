import React, { useRef, useState, useLayoutEffect } from 'react';
import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { NavLink, useLocation } from 'react-router-dom';

const linkList = [
  { index: 0, title: 'Home', value: '/', exact: true },
  { index: 1, title: 'Portfolio', value: '/portfolio' },
  { index: 2, title: 'Community', value: '/community' },
  { index: 3, title: 'Contact', value: '/contact' },
];

export default function Top() {
  const { pathname } = useLocation();

  const getSize = useRef([]);
  const [currentLayoutSize, setCurrentLayoutSize] = useState({
    width: 0,
    x: 0,
  });

  useLayoutEffect(() => {
    const filter = linkList?.filter(({ value }) => value === pathname);
    if (getSize?.current) {
      const size = getSize.current[filter[0]?.index];
      setCurrentLayoutSize({
        width: size.offsetWidth,
        x: size.offsetLeft,
      });
    }
  }, [pathname]);

  return (
    <div css={layout}>
      <section css={theme => themeStyle(theme, 'layout')}>
        <div css={tabInner}>
          {linkList?.map(({ index, title, value, exact }) => (
            <NavLinkStyle
              exact={exact}
              style={isActive => (isActive ? { fontWeight: 700 } : {})}
              to={value}
              key={index}
              ref={el => (getSize.current[index] = el)}
            >
              <span>
                <li css={theme => themeStyle(theme, 'text')}>{title}</li>
              </span>
            </NavLinkStyle>
          ))}
        </div>
        <MoveLine position={currentLayoutSize} />
      </section>
    </div>
  );
}

// common style
const themeStyle = (theme: Theme, type: string) => {
  switch (type) {
    case 'text':
      return {
        color: theme.colors.black000,
        fontSize: theme.fontsize.font16,
      };
    case 'layout':
      return {
        background: theme.colors.white,
        ...layoutInner,
      };
    default:
      break;
  }
};

const layout = css`
  position: absolute;
  display: flex;
  z-index: 999;
`;

const layoutInner = css`
  display: flex;
  margin-top: 0.5em;
  flex-direction: column;
`;

const tabInner = css`
  display: flex;
  padding: 0.6em 0.5em;
  margin-left: 0.8em;
  flex-direction: row;
`;

const MoveLine = styled.span<{ position: { x: number; width: number } }>`
  width: ${({ position }) => position.width + 'px'};
  display: inline-block;
  height: 1px;
  background: #111111;
  transform: translateX(${({ position }) => position?.x + 'px'});
  transition: transform 0.3s cubic-bezier(0.27, 0.84, 0.69, 1),
    width 0.3s cubic-bezier(0.27, 0.84, 0.69, 1);
`;

const NavLinkStyle = styled(NavLink)`
  align-items: center;
  padding: 0.4em 0.4em;
  margin: 0 0.2em;
`;
