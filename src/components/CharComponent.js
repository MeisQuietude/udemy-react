import React, { Component } from "react";
import "./CharComponent.css";

class CharComponent extends Component {
    render() {
        return (
            <div className="CharComponent" onClick={this.props.click}>
                {this.props.letter}
            </div>
        );
    }
}

export default CharComponent;
