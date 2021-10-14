/* 
 * Styles
 */

const styles = {
    footer: theme => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: theme.layout.footer.height,
        position: "fixed",
        bottom: 0,
        borderTop: `1px solid ${theme.palette.border.primary.main}`,
        backgroundColor: theme.palette.background.dark,
    }),
    footerNav: {
        width: "100%",
        height: "100%",
        "& nav": {
            display: "flex",
            flexWrap: "nowrap",
            width: "100%",
            height: "100%",
            "& a": {
                width: "100%",
                paddingBottom: "0.5rem",
                borderBottom: "none",
                "&:first-child": {
                    borderLeft: "none"
                },
                "&:last-child": {
                    borderRight: "none"
                },
            },
        },
    },
    copyright: {
        fontWeight: "bold",
    },
};

export default styles;