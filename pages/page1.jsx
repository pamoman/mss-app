/* 
 * Page 1
 */
import React from "react";
import { initializeApollo, addApolloState } from '@config/client';
import { useQuery } from '@apollo/client';
import Page from '@components/Page';
import PamoBlockController from '@components/shared/PamoBlockController';
import { Typography } from '@mui/material';

const Page1 = () => {
    const seo = {};
    const blocks = [];

    return (
        <Page seo={seo}>
            <Typography component="h1" variant="h2" align="center" gutterBottom>Page 1</Typography>
            {blocks && <PamoBlockController blocks={blocks} /> }
        </Page>
    )
};

export const getStaticProps = async (ctx) => {
    const apolloClient = initializeApollo();

    /* await apolloClient.query({ query: START }); */
  
    return addApolloState(apolloClient, {
        props: {},
        revalidate: 60,
    });
};

export default Page1;