import React, { Component } from "react";

class ValidationComponent extends Component {
    render() {

        let validationMessage = null;
        if (this.props.text.length < 5) {
            validationMessage = "Text too short";
        } else if (this.props.text.length > 10) {
            validationMessage = "Text too long!";
        }

        return (
            <div>
                <p>{validationMessage}</p>
            </div>
        );
    }
}

export default ValidationComponent;
