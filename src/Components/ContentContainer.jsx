import React from 'react';

class ContentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#FFFFFF",
            height: 0,
        }
    }

    componentDidMount(){
        let pageHeight = window.innerHeight - document.getElementById("header").offsetHeight - document.getElementById("menu").offsetHeight;
        this.setState({height: pageHeight})
    }

    render() {
        return(
            <div style={containerStyles}>
                <div style={{
                    backgroundColor: this.props.color,
                    minHeight: this.state.height,
                    }}>
                    <div style={headingStyles}>
                    <span>{this.props.title}</span>
                    </div>
                    <div style={contentStyles}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
    
}

const containerStyles = {
    color: "white",
    overflow: "scroll",
    width: "100%",
}

const headingStyles = {
    width: "100%",
    margin: "auto",
    paddingTop: "7px",
    textAlign: "center",
    fontSize: "2em",
}

const contentStyles = {
    margin: "0px 0.8em 0px 0.8em",
    border: "1px solid white",
    borderRadius: "15px",
    padding: "1em",
}

export default ContentContainer;