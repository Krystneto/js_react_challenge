import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ProductsNav = () => {
    const { breadcrumbStyles } = styles;
    
    return (
        <Breadcrumb style={breadcrumbStyles}>
            <LinkContainer to="/">
                <Breadcrumb.Item>
                    Home
                </Breadcrumb.Item>
            </LinkContainer>
            <Breadcrumb.Item active>
                Products
            </Breadcrumb.Item>
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

export default ProductsNav;