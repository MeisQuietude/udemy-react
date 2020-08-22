import React, { Component } from "react";
import "./App.css";
import ValidationComponent  from "./components/ValidationComponent";
import CharComponent        from "./components/CharComponent";

class App extends Component {
    state = {
        text: "Initial",
    };

    changeInputHandler = ( event ) => {
        const state = { ...this.state };
        state.text = event.target.value;
        this.setState(state);
    };

    deleteCharComponent = ( index ) => {
        const state = { ...this.state };
        const chars = state.text.split("");
        chars.splice(index, 1);
        this.setState({ text: chars.join("") });
    };

    render() {
        return (
            <div className="App">
                <input type="text" onChange={this.changeInputHandler} value={this.state.text} />
                <div>
                    {this.state.text.split("").map(( letter, i ) => {
                        return <CharComponent
                            click={() => this.deleteCharComponent(i)}
                            key={i}
                            letter={letter} />;
                    })}
                </div>
                <ValidationComponent text={this.state.text} />
            </div>
        );
    }
}

export default App;
