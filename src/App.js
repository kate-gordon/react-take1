import React, { Component } from "react";
import Quote from "./components/quotes";
import "./App.css";

class App extends Component {
    state = {
        category: "dev"
    };
    render() {
        const { category } = this.state;
        return (
            <div className="App">
                <Quote category={category} />
                <form action="#">
                  <label>Select a Category</label>
                  <button type='submit'>Get Quote for this Category</button>
        </form>
            </div>
        );
    }
}

export default App;
