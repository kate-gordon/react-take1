import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom"; 
import Quote from "./components/quotes";
import "./App.css";
import CategoryList from "./components/categoryList";

function App() {
        return (
            <div className="App">
                <h1>Chuck Reacts</h1>
                <Router>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/" exact> 
                        <CategoryList />
                    </Route>
                    <Route path="/category/:category_name?" component={Quote}/>
                </Router>
            </div>
        );    
}


export default App;
