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

const Apps = () => {
    const [start, setStart] = useState(0);
    const [limit, setLimit] = useState(10);

    /*---- Data query start ----*/
    const { loading, error, data } = useQuery(APPS, { variables: { start, limit } });

    error && console.log(`Error! ${error.message}`);
    /*---- Data query end ----*/

    const { apps } = data || {};

    return (
        <Page>
        </Page>
    )
};

export const getStaticProps = async (req, res) => {
    const apolloClient = initializeApollo();

    await apolloClient.query({
        query: APPS,
        variables: { start: 0, limit: 10 }
    });
  
    return addApolloState(apolloClient, {
        props: {},
        revalidate: 60,
    });
};

export default Apps;