import React, { useState } from "react";
import Person               from "./Person/Person";
import "./App.css";

const App = props => {
    const [ personsState, setPersonsState] = useState({
        persons: [
            { name: "Max", "age": 28 },
            { name: "Alex", "age": 29 },
            { name: "Nick", "age": 26 },
        ],
    });

    const switchNameHandler = () => {
        // DON'T DO THIS: this.state.persons[0].name = "Maximilian";
        setPersonsState({
            ...personsState,
            persons: [
                { name: "Maximilian", "age": 28 },
                { name: "Alex", "age": 29 },
                { name: "Nick", "age": 25 },
            ],

        })
    };

    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
        </div>
    );
}

export default App;
