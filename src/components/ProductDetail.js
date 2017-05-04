import React from 'react';
import { Thumbnail, Grid, Row, Col, PageHeader, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ProductsNav from './ProductsNav'

const ProductDetail = ({ selectedProduct, addProduct, removeProduct }) => {
    const { pageHeaderStyle, addCartStyle, removeCartStyle } = styles;

    return (
        <div>
            <ProductsNav />
            <PageHeader style={pageHeaderStyle}>
                {selectedProduct.name} 
            </PageHeader>
            <Grid>
                <Row>
                    <Col xs={6} xsOffset={3}>
                        <Thumbnail alt={selectedProduct.name} src={selectedProduct.image} />
                        <ul className="list-unstyled">
                            <li><u><em>Description:</em></u> {selectedProduct.description}</li>
                            <li><u><em>Price:</em></u> {selectedProduct.price}</li>
                            <LinkContainer style={addCartStyle} to="/products">
                                <Button bsStyle="success" onClick={() => addProduct(selectedProduct)}>Add to cart</Button>
                            </LinkContainer>
                            <LinkContainer style={removeCartStyle} to="/products">
                                <Button bsStyle="danger" onClick={() => removeProduct(selectedProduct)}>Remove from cart</Button>
                            </LinkContainer>
                        </ul>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

const styles = {
    pageHeaderStyle: {
        textAlign: 'center'
    },
    addCartStyle: {
        marginRight: 5
    },
    removeCartStyle: {
        marginleft: 5
    }
};

export default ProductDetail;
