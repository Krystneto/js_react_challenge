import React from 'react';
import { Thumbnail, Grid, Row, Col, PageHeader } from 'react-bootstrap';
import ProductsNav from './ProductsNav'

const ProductDetail = ({ selectedProduct }) => {
    const { pageHeaderStyle } = styles;

    return (
        <div>
            <ProductsNav />
            <PageHeader style={pageHeaderStyle}>
                {selectedProduct.name} 
            </PageHeader>
            <Grid>
                <Row>
                    <Col xs={12} md={6} mdOffset={3}>
                        <Thumbnail href={selectedProduct.image} alt={selectedProduct.name} src={selectedProduct.image} />
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
