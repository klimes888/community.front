import * as React from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyle } from '@/style/global';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import {theme} from '@/style/theme';

// pages
import LoginPage from '@/pages/page_Login/LoginPage';
import MainPage from '@/pages/page_Main/Main';
import Setting from '@/pages/page_Setting/Setting';
import SignupPage from '@/pages/page_Signup/SignupPage';
import Portfolio from '@/pages/page_Portfolio/Portfolio';
import MainStore from '@/store/mainStore';

const queryClient = new QueryClient();
const Root: React.FC = () => {

  const RouteArr = [
      {index:0, path:'/', component:MainPage},
      {index:1, path:'/login', component:LoginPage},
      {index:1, path:'/portfolio', component:Portfolio},
      {index:2, path:'/signup', component:SignupPage},
      {index:3, path:'/setting', component:Setting},
  ]

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme} >
      <Global styles={GlobalStyle} />
      <MainStore>
        <BrowserRouter>
          <Switch>
            {
              RouteArr?.map(({ index, path, component}) => (
                <Route path={path} exact component={component} key={index} />
              ))
            }
          </Switch>
        </BrowserRouter>
      </MainStore>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default Root;