import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom"; 
import Wrapper from "./components/wrapper";
import Quote from "./components/quotes";
import CategoryList from "./components/categoryList";

import { Title, Heading } from "bloomer"; 
import "bulma/css/bulma.css"; 
import "./App.css";



function App() {
        return (
            <div className="App">
               
                <Title isSpaced><Heading>Chuck </Heading>Reacts</Title>
        
                <Router>
                
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </nav>
                <Wrapper>
                    <Route path="/" exact> 
                        <CategoryList />
                    </Route>
                    <Route path="/category/:category_name?" component={Quote}/>
                    </Wrapper>
                </Router>
            </div>
        );    
}


export default App;
