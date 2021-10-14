/* 
 * Styles
 */

const styles = {
    videoContainer: {
        position: "relative",
        paddingTop: "56.25%",
        "& .react-player": {
            position: "absolute",
            top: 0,
            left: 0
        }
    },
    videoCaption: theme => ({
        position: "absolute",
        width: "100%",
        backgroundColor: theme.palette.figcaption.background.primary,
        ...theme.palette.figcaption.props
    })
};

export default styles;