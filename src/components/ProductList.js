import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { ListGroup, ListGroupItem, PageHeader } from 'react-bootstrap';
import ProductsNav from './ProductsNav';

class ProductList extends Component {
    render() {
        const { products } = this.props;
        const { pageHeaderStyles, listGroupStyles } = styles;

        return (
            <div>
                <ProductsNav />                
                <PageHeader style={pageHeaderStyles}>Product List</PageHeader>
                <ListGroup style={listGroupStyles}>
                    {products.map( (product,i) => {
                        return (
                            <LinkContainer key={product.name} to={`/products/${product.id}`}>
                                <ListGroupItem onClick={() => this.props.onSelectedProduct(product)}>{product.name}</ListGroupItem>
                            </LinkContainer>
                            )
                        })
                    }
                </ListGroup>
            </div>
        );
    }
}

const styles = {
    pageHeaderStyles: {
        textAlign: "center"
    },
    listGroupStyles: {
        width: 250
    }
}

export default ProductList;
