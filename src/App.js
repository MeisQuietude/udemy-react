import React, { Component } from "react";
import Person               from "./Person/Person";
import "./App.css";

class App extends Component {
    state = {
        persons: [
            { name: "Max", "age": 28 },
            { name: "Alex", "age": 29 },
            { name: "Nick", "age": 26 },
        ],
        showPersons: true,
    };

    nameChangedHandler = ( event ) => {
        this.setState({
            persons: [
                { name: "Max", age: 28 },
                { name: event.target.value, age: 29 },
                { name: "Nick", age: 26 },
            ],

        });
    };

    togglePersonHandler = ( event ) => {
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
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age} />
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age} />
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age} />
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
