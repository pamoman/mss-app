/*
 * Loading
 *
 * @jsxImportSource @emotion/react
 */

import { Box } from '@mui/material';
import styles from './styles';

export const Loading = ({ isLoading }) => {
    return (
        isLoading && (
            <Box css={styles.layer}>
                <Box css={styles.animationContainer}>
                    <Box css={styles.animation} />
                </Box>
            </Box>
        )
    );
};

export default Loading;