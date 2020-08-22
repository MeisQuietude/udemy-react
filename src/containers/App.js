import React, { Component } from "react";
import "./App.css";
import Persons              from "../components/Persons/Persons";
import Cockpit              from "../components/Cockpit/Cockpit";

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
    };

    nameChangeHandler = ( event, id ) => {
        const persons = [...this.state.persons];
        const personIndex = persons.findIndex(p => p.id === id);
        persons[personIndex] = {
            ...persons[personIndex],
            name: event.target.value,
        };
        this.setState({ persons });
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
                <Cockpit
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    click={this.togglePersonHandler} />
                {persons}
            </div>
        );
    }
}

export default App;
