import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import ProductsNav from './ProductsNav';

class ProductList extends Component {
    render() {
        const { products } = this.props;
        
        return (
            <div>
                <ProductsNav />                
                <ListGroup>
                {products.map( (product,i) => {
                    return (
                        <LinkContainer key={product.name} to={`/products/${product.id}`}>
                            <ListGroupItem>{product.name}</ListGroupItem>
                        </LinkContainer>
                        )
                    })}
                </ListGroup>
            </div>
        );
    }
}

export default ProductList;
