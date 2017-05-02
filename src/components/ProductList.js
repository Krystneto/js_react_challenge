import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        const { products } = this.props;
        
        return (
            <div>
                <ul>
                {products.map( (product,i) => {
                    return (
                        <li key={i}>
                            <a href={`/products/${product.id}`}>{product.name}</a>
                        </li>
                    )
                })}
                </ul>
            </div>
        )
    }
}

export default ProductList;
