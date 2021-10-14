/*
 * Guide
 */

import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { initializeApollo, addApolloState } from '@config/client';
import { GUIDES, GUIDE } from "@graphql/content";
import Page from '@components/Page';
import PamoBlockController from '@components/shared/PamoBlockController';
import { Grid, Box, Typography, Hidden } from '@mui/material';

const Guide = ({ slug }) => {
    const { data } = useQuery(GUIDE, { variables: { slug }});
    const guide = data?.guides[0];
    const { blocks } = guide;

    return (
        <Page>
            <Typography component="h1" variant="h2" align="center" gutterBottom>{guide.title}</Typography>
            {blocks && <PamoBlockController blocks={blocks} /> }
        </Page>
    )
};

export async function getStaticPaths() {
    const apolloClient = initializeApollo();

    const { data } = await apolloClient.query({
        query: GUIDES
    });

    const paths = data.guides.map(guide => { 
        return {
            params: { slug: guide.slug }
        }
    })

    return {
        paths,
        fallback: false
    }
};

export const getStaticProps = async (context) => {
    const { slug } = context.params;
    const apolloClient = initializeApollo();

    await apolloClient.query({
        query: GUIDE,
        variables: { slug }
    });
  
    return addApolloState(apolloClient, {
        props: { slug },
        revalidate: 60,
    });
};

export default Guide;