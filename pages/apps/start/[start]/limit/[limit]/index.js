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
import PamoBlockController from '@components/shared/PamoBlockController';
import { Grid, Typography, Link as MuiLink, ButtonGroup, Button } from '@mui/material';

const Apps = ({ start, limit }) => {
    /*---- Data query start ----*/
    const { loading, error, data } = useQuery(APPS, { variables: { start, limit } });

    error && console.log(`Error! ${error.message}`);
    /*---- Data query end ----*/

    const { apps } = data || {};

    console.log(start, limit);

    return (
        <Page>
        </Page>
    )
};

export async function getStaticPaths() {
    const paths = [
        {
            params: { start: "0", limit: "10" }
        },
        {
            params: { start: "0", limit: "20" }
        }
    ];

    return {
        paths,
        fallback: false
    }
};

export const getStaticProps = async (ctx) => {
    const { start, limit } = ctx.params;
    const apolloClient = initializeApollo();

    await apolloClient.query({
        query: APPS,
        variables: { start: parseInt(start), limit: parseInt(limit) }
    });
  
    return addApolloState(apolloClient, {
        props: { start, limit },
        revalidate: 60,
    });
};

export default Apps;