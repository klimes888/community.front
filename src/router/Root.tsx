import * as React from 'react';
import { css, Global, ThemeProvider } from '@emotion/react';
import { GlobalStyle } from '@/style/global';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { theme } from '@/style/theme';

// pages
import MainPage from '@/pages/page_Main/Main';
import Portfolio from '@/pages/page_Portfolio/Portfolio';

// style
import { bodyStyle } from '@/style/common/bodyStyle';

// NAV
import Top from '../components/top/Top';

const queryClient = new QueryClient();
const Root: React.FC = () => {
  const RouteArr = [
    { key: 0, path: '/', component: MainPage, exact: true },
    // { key: 1, path: '/login', component: LoginPage },
    { key: 2, path: '/portfolio', component: Portfolio },
    // { key: 3, path: '/signup', component: SignupPage },
    // { key: 4, path: '/setting', component: Setting },
    // { key: 5, path: '/randing', component: Landing },
    // { key: 6, path: '/contact/', component: Contact },
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <BrowserRouter>
          <div css={[bodyStyle(), layout]}>
            <Top />
            <Switch>
              {RouteArr?.map(router => (
                <Route {...router} key={router?.key} />
              ))}
            </Switch>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const layout = css`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default Root;
