/*
 * Guide index
 *
 * @jsxImportSource @emotion/react
 */

import NextLink from 'next/link';
import { useQuery } from '@apollo/client';
import { initializeApollo, addApolloState } from '@config/client';
import { GUIDES } from "@graphql/content";
import Page from '@components/Page';
import { Grid, Card, CardHeader, CardActions, Typography, Link as MuiLink } from '@mui/material';
import utils from 'utils';
import styles from '@styles/guides';

const GuideList = () => {
    /*---- Data query start ----*/
    const { loading, error, data } = useQuery(GUIDES);

    error && console.log(`Error! ${error.message}`);
    /*---- Data query end ----*/

    const { guides } = data && data;

    return (
        <Page>
            <Typography component="h1" variant="h2" align="center" gutterBottom>Guide list</Typography>

            <Grid container spacing={0}>
                {guides.map(guide => {
                    return (
                        <Grid item css={styles.cardWrapper} xs={12} sm={6} md={4} key={guide.id}>
                            <Card css={styles.card}>
                                <NextLink href={`/guides/${guide.slug}`} passHref>
                                    <MuiLink>
                                        <CardHeader
                                            css={styles.cardHeader}
                                            title={guide.title}
                                            subheader={<Typography variant="h7">{utils.getLocalDate(guide.updated_at)}</Typography>}
                                        />
                                    </MuiLink>
                                </NextLink>

                                <CardActions css={styles.cardActions} disableSpacing>
                                    {guide.categories.map(category => {
                                        const { id, image } = category;
                                        const { url, caption, alternativeText } = image;

                                        return (
                                            <figure key={`category-${id}`}>
                                                <img src={`${process.env.NEXT_PUBLIC_API_URL}${url}`} alt={alternativeText} />

                                                {caption &&
                                                    <figcaption>
                                                        <Typography color="primary" variant="subtitle1">{caption}</Typography>
                                                    </figcaption>
                                                }
                                            </figure>
                                        )
                                    })}
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Page>
    )
};

export const getStaticProps = async (ctx) => {
    const apolloClient = initializeApollo();

    await apolloClient.query({
        query: GUIDES
    });
  
    return addApolloState(apolloClient, {
        props: {},
        revalidate: 60,
    });
};

export default GuideList;