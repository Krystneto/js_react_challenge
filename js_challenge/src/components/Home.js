import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import HomeNav from './HomeNav';


const Home = () => {
    const { textStyles, jumbotronStyles } = styles;
    
    return (
        <div>  
            <HomeNav />
            <Jumbotron style={jumbotronStyles}>
                <h1 style={textStyles}>Welcome to the Faker Market</h1>
                <p style={textStyles}>Check out our products!</p>
                <LinkContainer to="/products">
                    <Button style={jumbotronStyles} bsStyle="info">Click here</Button>
                </LinkContainer>
            </Jumbotron>
        </div>
    );
};

const styles = {
    textStyles: {
        textAlign: "center"
    },
    jumbotronStyles: {
        backgroundColor: "#fff5ee",
        borderColor: 'black',
        textAlign: "center"
    }
};

export default Home;
