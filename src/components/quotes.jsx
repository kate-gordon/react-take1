import React, { Component } from "react";
import { loadData } from "../utils/loadData";
import { Button, Title, Column } from "bloomer"; 

class Quote extends Component {
    state = {
        quote: "Fetching quotes..."
    };
    async componentDidMount() {
        const category = this.props.match.params.category_name; 
        this.getQuote(category);
    }

    getQuote = async category => {
         
        const data = await loadData(
            `https://api.chucknorris.io/jokes/random?category=${category}`
        );
        const quote = data.value;

        this.setState({
            quote
        });
    };

    handleClick = e => {
        e.preventDefault(); 
        this.getQuote(this.props.match.params.category_name);
    }

    render() {
        const { quote } = this.state;
        const category = this.props.match.params.category_name;  

        return (
            <Column isSize='1/2'>
                <Title isSize={2}>{quote}</Title>
                <Button isColor="dark" isSize="medium" onClick={e => this.handleClick(e)}>
                    Get Another Quote from the {category} Category!
                </Button>
            </Column>
        );
    }
}

export default Quote;