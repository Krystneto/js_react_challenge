import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const HomeNav = () => {
    const { breadcrumbStyles } = styles;
    
    return (
        <Breadcrumb style={breadcrumbStyles}>
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
    )
};

const styles = {
    breadcrumbStyles: {
        backgroundColor: 'fff5ee'
    }
};

export default HomeNav;
