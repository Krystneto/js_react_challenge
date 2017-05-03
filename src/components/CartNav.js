import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CartNav = () => {
    const { breadcrumbStyles } = styles;
    
    return (
        <Breadcrumb style={breadcrumbStyles}>
            <LinkContainer to="/">
                <Breadcrumb.Item>
                    Home
                </Breadcrumb.Item>
            </LinkContainer>
            <LinkContainer to="/products">
                <Breadcrumb.Item>
                    Products
                </Breadcrumb.Item>
            </LinkContainer>
            <Breadcrumb.Item active>
                Cart
            </Breadcrumb.Item>
        </Breadcrumb>
    )
};

const styles = {
    breadcrumbStyles: {
        backgroundColor: 'fff5ee'
    }
};

export default CartNav;