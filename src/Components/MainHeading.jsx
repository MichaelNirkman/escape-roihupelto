const MainHeading = () => {

    const headingContainer = {
        padding: "3px",
        color: "white",
        backgroundColor: "#420420",
        textAlign: "center",
    };

    const headingText = {
        width: "100%",
        padding: "0px",
        margin: "0px",
        fontSize: "15px",
        letterSpacing: "3vh",
        fontWeight: "normal",
        fontFamily: "inherit",
    }

    return(
        <div id="header" style={headingContainer}>
            <h1 style={headingText}>escape roihupelto</h1>
        </div>
    );
}

export default MainHeading