/*
 * Footer
 *
 * @jsxImportSource @emotion/react
 */

import { Box, Typography, Hidden } from '@mui/material';
import Navbar from '@components/global/Navbar';
import styles from './styles';

const Footer = ( { copyright, ...links }) => {
    return (
        <footer css={styles.footer}>
            <Hidden mdDown>
                <Box css={styles.copyright}>
                    <Typography variant="h6">{copyright && `\u00A9 ${copyright}`}</Typography>
                </Box>
            </Hidden>
            
            <Hidden mdUp>
                <Box css={styles.footerNav}>
                    <Navbar {...links} />
                </Box>
            </Hidden>
        </footer>
    );
};

export default Footer;