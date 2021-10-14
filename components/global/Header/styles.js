/* 
 * Styles
 */

const styles = {
    header: theme => ({
        backgroundColor: theme.palette.background.dark,
    }),
    headerNav: theme => ({
        display: "flex",
        height: "90px",
        borderBottom: `1px solid ${theme.palette.border.primary.main}`,
        "& nav": {
            display: "flex",
            "& a": {
                width: "110px",
                "&.active-nav": {
                    borderBottom: `2px solid ${theme.palette.border.secondary.main}`,
                },
            },
        }
    }),
    siteHeading: theme => ({
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        [theme.breakpoints.up('md')]: {
            width: "500px",
            justifyContent: "flex-start",
        },
    }),
    siteLogo: {
        marginRight: 5
    },
};

export default styles;