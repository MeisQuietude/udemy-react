import React, { useState } from "react";
import Person              from "./Person/Person";
import "./App.css";

const App = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: "Max", "age": 28 },
            { name: "Alex", "age": 29 },
            { name: "Nick", "age": 26 },
        ],
        showPersons: true,
    });

    const switchNameHandler = ( e, newName = "Maximillianus" ) => {
        // DON'T DO THIS: this.state.persons[0].name = "Maximilian";
        setPersonsState({
            ...personsState,
            persons: [
                { name: newName, "age": 28 },
                { name: "Alex", "age": 29 },
                { name: "Nick", "age": 25 },
            ],

        });
    };

    const nameChangedHandler = ( e ) => {
        setPersonsState({
            ...personsState,
            persons: [
                { name: "Max", "age": 28 },
                { name: e.target.value, "age": 29 },
                { name: "Nick", "age": 26 },
            ],

        });
    };

    const togglePersonHandler = ( e ) => {
        setPersonsState({
            ...personsState,
            showPersons: !personsState.showPersons,
        });
    };

    const styleButton = {
        font: "inherit",
        border: "1px solid blue",
        padding: "8px",
        cursor: "pointer",
    };

    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button
                style={styleButton}
                onClick={togglePersonHandler}>Toggle Persons
            </button>
            {
                personsState.showPersons ?
                    <div>
                        <Person
                            click={switchNameHandler.bind(null, null, "Maxi")}
                            name={personsState.persons[0].name}
                            age={personsState.persons[0].age} />
                        <Person
                            click={switchNameHandler.bind(null, null, "Moxi")}
                            changed={nameChangedHandler}
                            name={personsState.persons[1].name}
                            age={personsState.persons[1].age} />
                        <Person
                            click={switchNameHandler}
                            name={personsState.persons[2].name}
                            age={personsState.persons[2].age} />
                    </div> : null
            }
        </div>
    );
};

export default App;
