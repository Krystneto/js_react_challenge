import React from 'react';
import ProductDetail from './ProductDetail';

const ProductsProp = ({match})  => {
    console.log({match})
    return (
        <ProductDetail />
    )
}

export default ProductsProp;