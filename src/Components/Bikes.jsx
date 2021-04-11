import React from 'react';
import "../App.css"

class Bikes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            opened: false,
        }
    }

    handleToggle = () => {
        this.setState((prevState) => {return {opened: !prevState.opened}});
    }

    render() {
        return(
            <div className="bike-container">
                <button className="toggle-button" onClick={this.handleToggle}>Tsygät</button>
                {this.state.opened ? (
                <p>yes</p>
                ) : (
                    <p>no</p>
                )
            }
            </div>
        );
    }
    
}

export default Bikes;