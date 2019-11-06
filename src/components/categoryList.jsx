import React, { Component } from "react";
import { loadData } from "../utils/loadData"; 
import { Link } from "react-router-dom"; 
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownContent, DropdownItem, Button, Icon } from "bloomer"; 


class CategoryList extends Component {
    state = {
        categories: []
    };

    async componentDidMount() {
        const categories = await loadData(
            `https://api.chucknorris.io/jokes/categories`
        ); 
        this.setState({
            categories
        });
    }

        render () {
            const { categories } = this.state; 
            return(
                <>
                 <Dropdown isHoverable>
                 <DropdownTrigger>
                    <Button  isOutlined aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Categories</span>
                        <Icon icon="angle-down" isSize="small" />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu>
                    <DropdownContent>
                    { categories.map((category, id) => {
                        return (
                        <DropdownItem href={`/category/${category}`}>{ category } </DropdownItem>
                    
                        );

                    })}
                    </DropdownContent>
                </DropdownMenu>
            </Dropdown>
                </> 
            );
        }
}

export default CategoryList; 
