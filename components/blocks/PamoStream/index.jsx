/*
 * Block - PamoStream
 *
 * @jsxImportSource @emotion/react
 */

import ReactPlayer from 'react-player';
import { Grid, Typography } from '@mui/material';
import styles from './styles';

const PamoStream = ({ url, caption, settings }) => {
    const { autoplay, muted, controls } = settings;

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12}>
                <figure css={styles.streamContainer}>
                    <ReactPlayer
                        className="react-player"
                        url={url}
                        playing={autoplay}
                        muted={muted}
                        controls={controls}
                        width="100%"
                        height="100%"
                    />

                    {caption &&
                        <figcaption css={styles.streamCaption}>
                            <Typography color="primary" variant="subtitle1">{caption}</Typography>
                        </figcaption>
                    }
                </figure>
            </Grid>
        </Grid>
    )
};

export default PamoStream;