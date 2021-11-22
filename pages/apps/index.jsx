/* 
 * Apps
 */
import React, { useState } from "react";
import NextLink from 'next/link';
import { initializeApollo, addApolloState } from '@config/client';
import withJamfAuth from '@config/withJamfAuth';
import { useQuery } from '@apollo/client';
import { APPS } from "@graphql/apps";
import Page from '@components/Page';
import App from '@components/cards/App';
import PamoBlockController from '@components/shared/PamoBlockController';
import { Grid, Typography, Link as MuiLink, ButtonGroup, Button } from '@mui/material';
import styles from '@styles/guides';

const start = 0, limit = 10;

const Apps = () => {
    /*---- Data query start ----*/
    const { loading, error, data } = useQuery(APPS, { variables: { start, limit } });

    error && console.log(`Error! ${error.message}`);
    /*---- Data query end ----*/

    const { apps } = data || {};

    return (
        <Page>
            <Typography component="h1" variant="h2" align="center" gutterBottom>Apps</Typography>

            <Grid container spacing={0}>
                {apps.map(app => {
                    return (
                        <Grid item css={styles.cardWrapper} xs={12} sm={6} md={4} key={app.id}>
                            <App data={app} />
                        </Grid>
                    )
                })}
            </Grid>
        </Page>
    )
};

export const getStaticProps = async (req, res) => {
    const apolloClient = initializeApollo();

    await apolloClient.query({
        query: APPS,
        variables: { start, limit }
    });
  
    return addApolloState(apolloClient, {
        props: {},
        revalidate: 60,
    });
};

export default Apps;