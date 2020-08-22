import React, { Component } from "react";
import "./UserOutput.css";

class UserOutput extends Component {
    render() {
        return (
            <div className="UserOutput">
                <p>{this.props.children || "No username provided"}</p>
                <p>Any text here #2</p>
            </div>
        );
    }
}

export default UserOutput;
