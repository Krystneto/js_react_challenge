import React from 'react';
import { Thumbnail, Grid, Row, Col, PageHeader, Button } from 'react-bootstrap';
import ProductsNav from './ProductsNav'

const ProductDetail = ({ selectedProduct, addProduct, removeProduct }) => {
    const { pageHeaderStyle } = styles;

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
                            <Button onClick={() => addProduct(selectedProduct)}>Add to cart</Button>
                            <Button onClick={() => removeProduct(selectedProduct)}>Remove from cart</Button>
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
    }
};

export default ProductDetail;
