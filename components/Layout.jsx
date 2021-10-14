/*
 * Layout
 */

import Header from '@components/global/Header';
import Footer from '@components/global/Footer';
import MessageSystem from "@components/global/MessageSystem";
import globals from '@data/globals.json';
import { Container } from '@mui/material';

const Layout = ({ children }) => {
    const { header, footer } = globals;

    return (
        <>
            <Header {...header} />
            <Container disableGutters maxWidth="lg">
                <main>{ children }</main>
            </Container>
            <MessageSystem />
            <Footer {...header} {...footer} />
        </>
    )
};

export default Layout;