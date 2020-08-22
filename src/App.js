import React, { useState } from "react";
import "./App.css";
import UserInput  from "./components/UserInput";
import UserOutput from "./components/UserOutput";

function App() {
    const [currentState, setState] = useState({
        username: ""
    });

    const usernameOnchangeHandler = (event) => {
        const username = event.target.value;
        setState({
            ...currentState,
            username
        })
    }

    return (
        <div className="App">
            <UserInput changed={usernameOnchangeHandler}/>
            <UserOutput>{currentState.username}</UserOutput>
        </div>
    );
}

export default App;
