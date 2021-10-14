/*
 * Header
 *
 * @jsxImportSource @emotion/react
 */

import Image from 'next/image';
import Navbar from '@components/global/Navbar';
import Link from 'next/link';
import { Grid, Box, Typography, Hidden } from '@mui/material';
import styles from './styles';

const Header = ({ title, logo, ...links }) => {
    return (
        <header css={styles.header}>
            <Box css={styles.headerNav}>
                <Link href="/">
                    <a css={styles.siteHeading}>
                        <Typography color="primary" variant="h4">
                            <Grid container direction="row" alignItems="center">
                                {logo &&
                                    <Grid item css={styles.siteLogo}>
                                        <Image src={`/${logo?.name}`} alt={title} layout='fixed' objectFit="contain" width={50} height={50} />
                                    </Grid>
                                }
                                    <Grid item>
                                        {title}
                                    </Grid>
                            </Grid>
                        </Typography>
                    </a>
                </Link>

                <Hidden mdDown>
                    <Navbar {...links} />
                </Hidden>
            </Box>
        </header>
    )
}

export default Header;