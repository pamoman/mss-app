/*
 * Styles
 */

const styles = {
    nav: theme => ({
        width: "100%",
        backgroundColor: theme.palette.background.dark,
        "& a": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1rem",
            fontWeight: "bold",
            textDecoration: "none",
            borderLeft: `1px solid ${theme.palette.border.primary.main}`,
            borderRight: `1px solid ${theme.palette.border.primary.main}`,
            borderBottom: `2px solid ${theme.palette.background.dark}`,
            color: theme.palette.iconButton.primary.disabled,
            "&.active-nav": {
                color: theme.palette.iconButton.primary.main,
            },
            "&:not(.active-nav):hover": {
                color: theme.palette.iconButton.primary.main,
                backgroundColor: theme.palette.background.light,
            },
            "&.right-nav": {
                marginLeft: "auto",
            },
        },
    }),
    navIcon: {
        textAlign: "center"
    },
};

export default styles;