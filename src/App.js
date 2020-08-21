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

    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button onClick={switchNameHandler}>Switch Name</button>
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
        </div>
    );
};

export default App;
