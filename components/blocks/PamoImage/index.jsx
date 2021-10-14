/*
 * Block - PamoImage
 * 
 * @jsxImportSource @emotion/react
 */

import Image from 'next/image';
import { Grid, Typography } from '@mui/material';
import styles from './styles';

const PamoImage = ({ image }) => {
    const { url, caption, alternativeText } = image;

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12}>
                <figure>
                    <Image 
                        src={`${process.env.NEXT_PUBLIC_API_URL}${url}`}
                        alt={alternativeText}
                        layout='responsive'
                        objectFit='cover'
                        width={16}
                        height={9}
                    />

                {caption &&
                    <figcaption css={styles.imageCaption}>
                        <Typography color="primary" variant="subtitle1">{caption}</Typography>
                    </figcaption>
                }
                </figure>
            </Grid>
        </Grid>
    )
};

export default PamoImage;