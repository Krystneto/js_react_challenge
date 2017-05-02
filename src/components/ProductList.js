import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductList extends Component {
    render() {
        const { products } = this.props;
        
        return (
            <div>
                <ul>
                {products.map( (product,i) => {
                    return (
                        <li key={i}>
                            <Link to={`/products/${product.id}`}>{product.name}</Link>
                        </li>
                    )
                })}
                </ul>
            </div>
        )
    }
}

export default ProductList;
