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
                            <Link to={`/products/${product.id}`}>{product.name}
                                <img src={product.image}></img>
                            </Link>
                        </li>
                    )
                })}
                </ul>
            </div>
        )
    }
}

export default ProductList;
