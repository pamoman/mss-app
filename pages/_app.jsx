import React, { useState } from 'react';
import { Provider as AuthProvider } from 'next-auth/client';
import { CookiesProvider } from "react-cookie";
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@config/client';
import { MessageProvider } from "@components/global/MessageSystem/Message";
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@styles/createEmotionCache';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, GlobalStyles } from '@mui/material';
import theme, { globalStyle } from '@themes/dark';
import Layout from '@components/Layout';

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
    const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
    const apolloClient = useApollo(pageProps);
    const [message, setMessage] = useState({ open: false, text: "", severity: "success" });

    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles styles={globalStyle} />
                <AuthProvider session={pageProps.session}>
                    <CookiesProvider>
                        <ApolloProvider client={apolloClient}>
                            <MessageProvider value={{ message, setMessage }}>
                                <Layout>
                                    <Component {...pageProps} />
                                </Layout>
                            </MessageProvider>
                        </ApolloProvider>
                    </CookiesProvider>
                </AuthProvider>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default App;