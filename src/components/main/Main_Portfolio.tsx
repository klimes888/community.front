import React from 'react';
import { css, Theme } from '@emotion/react';

type propsType = {
  data: [];
};

const tableTitle = [
  { index: 0, title: 'no.', type: 'number' },
  { index: 1, title: '타이틀', type: 'title' },
  { index: 2, title: '내용', type: 'desc' },
  { index: 3, title: '글쓴이', type: 'author' },
  { index: 4, title: '날짜', type: 'date' },
];

const dummyData = [
  {
    id: 0,
    isMe: false,
    title: '질문이 있습니다',
    desc: '여기는 커뮤니티인가요 아니면 개인 블로그 같은 공간인가요',
    user_id: 'abc',
    date: '2012-04-23T18:25:43.511Z',
  },
  {
    id: 1,
    isMe: true,
    title: '처음 써보는 게시글',
    desc: '안녕하세요 굳이 가입해서 글을 남깁니다',
    user_id: 'taehee',
    date: '2012-04-23T18:25:43.511Z',
  },
  {
    id: 2,
    isMe: false,
    title: '포트폴리오 관련해서',
    desc: '...',
    user_id: 'qqq123',
    date: '2012-04-23T18:25:43.511Z',
  },
];

export default function Main_Portfolio({ data }: propsType) {
  const commonStyle = {};
  const tableLayout = (): JSX.Element => {
    return (
      <article css={TableLayout}>
        <div css={RowLayout}>
          {tableTitle?.map(itmes => (
            <div
              css={theme => [
                RowLayoutInner,
                layoutStlye({ theme, type: itmes?.type }),
              ]}
            >
              <span css={theme => [FontStyle, fontStlye(theme, itmes?.type)]}>
                {itmes?.title}
              </span>
            </div>
          ))}
        </div>
        {dummyData?.map(({ id, isMe, title, desc, user_id, date }) => (
          <div css={RowLayout} key={id}>
            <div css={RowLayoutInner}>
              <span css={theme => [FontStyle, fontStlye(theme, 'title')]}>
                {title}
              </span>
            </div>
            <div css={RowLayoutInner}>
              <span>{desc}</span>
            </div>
            <div css={RowLayoutInner}>
              <span>{user_id}</span>
            </div>
            <div css={RowLayoutInner}>
              <span>{date}</span>
            </div>
          </div>
        ))}
      </article>
    );
  };

  return (
    <section css={theme => [Layout, layoutStlye({ theme, type: '' })]}>
      <div css={LayoutInner}>{tableLayout()}</div>
    </section>
  );
}

const layoutStlye = ({ theme, type }) => {
  return { 'border-bottom': `1px solid 1px solid${theme.colors.blue500}` };
};

const titleStyle = (theme: Theme, type: string) => {
  if (type === '') {
    return {};
  }
};

const fontStlye = (theme: Theme, type: string) => {
  const common = {
    'font-size': theme.fontsize.font14,
  };

  if (type === '') {
    return {};
  } else {
    return {
      ...common,
      color: theme.colors.blue500,
    };
  }
};

const Layout = css`
  display: flex;
  width: 100%;
  height: 100px;
`;

const LayoutInner = css`
  flex: 1;
`;

// flex table
const TableLayout = css`
  flex: 1;
  flex-direction: row;
`;

const RowLayout = css`
  display: flex;
`;

const RowLayoutInner = css``;

// font

const FontStyle = css`
  color: red;
`;
