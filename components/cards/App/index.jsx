/*
 * App Card
 *
 * @jsxImportSource @emotion/react
 */

import NextLink from 'next/link';
import utils from 'utils';
import { Grid, Card, CardHeader, CardActions, Typography, Link as MuiLink } from '@mui/material';
import styles from '@styles/guides';

const App = ({ data }) => {
    const { title, updated_at, logo, devices } = data || {};

    return (
        <Card css={styles.card}>
            <NextLink href={`/apps/${title}`} passHref>
                <MuiLink>
                    <CardHeader
                        css={styles.cardHeader}
                        title={<Typography variant="h4" noWrap>{title}</Typography>}
                        subheader={<Typography variant="h7">{utils.getLocalDate(updated_at)}</Typography>}
                    />
                </MuiLink>
            </NextLink>

            <CardActions css={styles.cardActions} disableSpacing>
                {devices.map(device => {
                    const { id, image } = device;
                    const { url, caption, alternativeText } = image;

                    return (
                        <figure key={`device-${id}`}>
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
    )
}

export default App;