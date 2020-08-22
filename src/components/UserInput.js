import React, { Component } from "react";

class UserInput extends Component {
    render() {
        const style = {
            marginTop: "20px",
        }
        return (
            <div style={style}>
                <label htmlFor="username">Username </label>
                <input type="text" id="username" onChange={this.props.changed} value={this.props.username}/>
            </div>
        );
    }
}

export default UserInput;
