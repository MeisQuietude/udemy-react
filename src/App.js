import React, { Component } from "react";
import Person               from "./Person/Person";
import classes              from "./App.module.css";
import "./App.css";

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
        // const styleButton = {
        //     backgroundColor: "green",
        //     color: "white",
        //     font: "inherit",
        //     border: "1px solid blue",
        //     padding: "8px",
        //     cursor: "pointer",
        //     ":hover": {
        //         backgroundColor: "lightgreen",
        //         color: "black",
        //     },
        // };

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
            // styleButton.backgroundColor = "red";
            // styleButton[":hover"] = {
            //     backgroundColor: "salmon",
            //     color: "black",
            // };
        }

        const assignedClasses = [];
        if ( this.state.persons.length <= 2 ) {
            assignedClasses.push("red");
        }
        if ( this.state.persons.length <= 1 ) {
            assignedClasses.push("bold");
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p className={assignedClasses.join(" ")}>This is really working!</p>
                <button
                    className={classes.Button}
                    altstyle={this.state.showPersons}
                    onClick={this.togglePersonHandler}>Toggle Persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
