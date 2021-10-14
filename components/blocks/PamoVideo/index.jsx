/*
 * Block - PamoVideo
 *
 * @jsxImportSource @emotion/react
 */

import ReactPlayer from 'react-player';
import { Grid, Typography } from '@mui/material';
import styles from './styles';

const PamoVideo = ({ video, settings }) => {
    const { url, caption, alternativeText } = video;
    const { autoplay, muted, controls } = settings;

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12}>
                <figure css={styles.videoContainer}>
                    <ReactPlayer
                        className="react-player"
                        url={`${process.env.NEXT_PUBLIC_API_URL}${url}`}
                        playing={autoplay}
                        muted={muted}
                        controls={controls}
                        width="100%"
                        height="100%"
                    />

                    {caption &&
                        <figcaption css={styles.videoCaption}>
                            <Typography color="primary" variant="subtitle1">{caption}</Typography>
                        </figcaption>
                    }
                </figure>
            </Grid>
        </Grid>
    )
};

export default PamoVideo;