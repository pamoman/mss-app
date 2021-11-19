/* 
 * Apps
 */
import React, { useState, useEffect } from "react";
import useSWR from 'swr';
import { initializeApollo, addApolloState } from '@config/client';
import { useQuery } from '@apollo/client';
import ReactMarkdown from 'react-markdown';
import Page from '@components/Page';
import PamoBlockController from '@components/shared/PamoBlockController';
import { Grid, Box, Typography, ButtonGroup, Button, TextField } from '@mui/material';

const AppSearch = () => {
    const [query, setQuery] = useState("");
    const [appData, setAppData] = useState({});
    const [appPrivacy, setAppPrivacy] = useState({});
    const seo = {};
    const blocks = [];

    const queryAppStore = async (e) => {
        e.preventDefault();

        const res = await fetch(`api/apps/${query}`);

        const { data, privacy } = await res.json() || {};

        setAppData(data);

        setAppPrivacy(privacy);

        console.log(data, privacy);
    };

    return (
        <Page seo={seo}>
            <Typography component="h1" variant="h2" align="center" gutterBottom>App Search</Typography>
            
            <Grid container justifyContent="center">
                <Grid item xs={4}>
                    <form onSubmit={queryAppStore}>
                        <ButtonGroup variant="contained" aria-label="App query">
                            <TextField
                                id="app-query"
                                label="Sök"
                                type="text"
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                required
                                variant="filled"
                            />

                            <Button
                                color="primary"
                                type="submit"
                            >
                                Sök
                            </Button>
                        </ButtonGroup>
                    </form>
                </Grid>
            </Grid>

            {appData &&
            <>
                <Typography variant="h2" gutterBottom>{appData?.title}</Typography>

                <Grid container justifyContent="center">
                    <Grid item xs={12}>
                        <ReactMarkdown children={appData?.description}></ReactMarkdown>
                    </Grid>
                </Grid>
            </>
            }

            {blocks && <PamoBlockController blocks={blocks} /> }
        </Page>
    )
};

export default AppSearch;