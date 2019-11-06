import React, { Component } from "react";
import { Container, Box } from "bloomer"; 

const Wrapper = props => {
    return (
        <Container> 
            <Box isColor='dark'>
                {props.children}
            </Box>
        </Container>
    );
}; 

export default Wrapper; 

