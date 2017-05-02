import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Home = () => (
    <div>  
        <Breadcrumb>
            <Breadcrumb.Item active>
                Home
            </Breadcrumb.Item>
            <LinkContainer to="/products">
                <Breadcrumb.Item>
                    Products
                </Breadcrumb.Item>
            </LinkContainer>
            <LinkContainer to="/cart">
                <Breadcrumb.Item>
                    Cart
                </Breadcrumb.Item>
            </LinkContainer>
        </Breadcrumb>
    </div>
);

export default Home;
