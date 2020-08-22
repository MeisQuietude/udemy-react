import React, { Component } from "react";
import Person               from "./Person/Person";
import "./App.css";

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
            name: event.target.value
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
        const styleButton = {
            font: "inherit",
            border: "1px solid blue",
            padding: "8px",
            cursor: "pointer",
        };

        let persons = null;
        if ( this.state.showPersons ) {
            persons = (
                <div>
                    {this.state.persons.map(( person, index ) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            changed={( event ) => this.nameChangeHandler(event, person.id)}
                            name={person.name}
                            age={person.age}
                            key={index} />;
                    })}
                </div>

            );
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button
                    style={styleButton}
                    onClick={this.togglePersonHandler}>Toggle Persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
