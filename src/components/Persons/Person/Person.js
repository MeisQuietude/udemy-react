import React, { Component } from "react";
import styled               from "styled-components";
import AuthContext          from "../../../context/auth-context";
// import "./Persons.css";

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    `;

class Person extends Component {

    // Allow us to use this.context.authenticated
    static contextType = AuthContext;

    render() {
        return (
            <StyledDiv>
                {(this.context.authenticated) ?
                    <p>Authenticated!</p> :
                    <p>Please log in!</p>}
                <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </StyledDiv>
        );
    }
}

export default Person;
