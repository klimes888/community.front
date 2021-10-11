import * as React from 'react';
import { Global } from '@emotion/react'
import { GlobalStyle } from '@/style/global';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

// pages
import LoginPage from '@/pages/page_Login/LoginPage';
import MainPage from '@/pages/page_Main/Main';
import Setting from '@/pages/page_Setting/Setting';
import SignupPage from '@/pages/page_Signup/SignupPage';

const queryClient = new QueryClient();
const Root: React.FC = () => {

    return (
        <QueryClientProvider client={queryClient}>
            <Global styles={GlobalStyle} />
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" component={SignupPage} />
                    <Route path="/setting" component={Setting} />
                </Switch>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default Root;