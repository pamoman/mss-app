/* 
 * Styles
 */

const styles = {
    cardWrapper: {
        padding: "1rem"
    },
    card: theme => ({
        maxWidth: "100%",
        margin: "auto",
        backgroundColor: theme.palette.background.dark,
        color: theme.palette.primary.main,
        borderRadius: "1rem",
        [theme.breakpoints.up('sm')]: {
            maxWidth: 325,
            justifyContent: "center"
        },
    }),
    cardHeader: {
        "& h4": {
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
        },
    },
    media: theme => ({
        height: 0,
        paddingTop: '56.25%',
        backgroundSize: "90%",
        backgroundColor: theme.palette.paper.light,
        mixBlendMode: "difference",
    }),
    expand: theme => ({
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }),
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: theme => ({
        display: 'flex',
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        '& > *': {
            margin: theme.spacing(1)
        },
    }),
    CardContent: {
        "& h5": {
            fontWeight: "bold"
        }
    },
    cardActions: theme => ({
        display: "flex",
        justifyContent: "flex-end",
        borderTop: `1px solid ${theme.palette.border.primary.main}`,
        "& figure": {
            margin: "0 1rem 0 1rem",
            textAlign: "center",
            "& img": {
                width: "32px",
                height: "32px",
            }
        }
    }),
};

export default styles;