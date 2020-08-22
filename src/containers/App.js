import React, { Component } from "react";
import "./App.css";
import Persons              from "../components/Persons/Persons";
import Cockpit              from "../components/Cockpit/Cockpit";
import AuthContext          from "../context/auth-context";

// const StyledButton = styled.button`
//     background-color: ${props => props.alt ? "red" : "green"};
//     color: white;
//     font: inherit;
//     border: 1px solid blue;
//     padding: 8px;
//     cursor: pointer;
//
//     &:hover {
//         background-color: ${props => props.altstyle ? "salmon" : "lightgreen"};
//         color: black;
//     }
// `;

class App extends Component {
    state = {
        persons: [
            { id: "001p", name: "Max", "age": 28 },
            { id: "002p", name: "Alex", "age": 29 },
            { id: "003p", name: "Nick", "age": 26 },
        ],
        showPersons: true,
        changeCounter: 0,
        authenticated: false,
    };

    nameChangeHandler = ( event, id ) => {
        const persons = [...this.state.persons];
        const personIndex = persons.findIndex(p => p.id === id);
        persons[personIndex] = {
            ...persons[personIndex],
            name: event.target.value,
        };
        this.setState(( prevState, props ) => {
            return {
                persons,
                changeCounter: prevState.changeCounter + 1,
            };
        });
    };

    deletePersonHandler = ( personIndex ) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons });
    };

    togglePersonHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons,
        });
    };

    loginHandler = () => {
        this.setState({ authenticated: true });
    };

    render() {
        let persons = null;
        if ( this.state.showPersons ) {
            persons = <Persons
                persons={this.state.persons}
                click={this.deletePersonHandler}
                changed={this.nameChangeHandler} />;
        }

        return (
            <div className="App">
                <AuthContext.Provider
                    value={{
                        authenticated: this.state.authenticated,
                        login: this.loginHandler }}>
                    <Cockpit
                        personsLength={this.state.persons.length}
                        showPersons={this.state.showPersons}
                        click={this.togglePersonHandler}
                        login={this.loginHandler}/>
                    {persons}
                </AuthContext.Provider>
            </div>
        );
    }
}

export default App;
