/*
 * Navbar
 *
 * @jsxImportSource @emotion/react
 */

import React from 'react';
import { useSession, signIn, signOut } from "next-auth/client";
import { Box, Typography, Avatar } from '@mui/material';
import PublicNav from './PublicNav';
import PrivateNav from './PrivateNav';
import styles from './styles';

const Navbar = ({ links }) => {
    const [session] = useSession();

    const NavIcon = (icon, name) => {
        return (
            <Box css={styles.navIcon}>
                <Typography>

                </Typography>

                <Typography variant="button">
                    {name}
                </Typography>
            </Box>
        )
    };

    const Me = () => {
        return (
            <Avatar alt={session?.user?.name} src={session?.user?.image} />
        )
    };

    const signInSite = (e) => {
        e.preventDefault();
        signIn('google');
    };

    const signOutSite = (e) => {
        e.preventDefault();
        signOut();
    };

    return (
        <nav css={styles.nav}>
            {links.map(link => <PublicNav key={link.id} {...link} />)}
            {!session && <PublicNav href="#" right onClick={signInSite} label={"Logga in"} />}
            <PrivateNav href="#" right label={Me()} />
            <PrivateNav href="#" onClick={signOutSite} label={"Logga ut"} />
        </nav>
    );
};

export default Navbar;