import React from 'react';
import CartNav from './CartNav';

const CartList = (props) => {
    
    return (
        <div>
            <CartNav />
            <h1>Cart List</h1>
            <ul>
                {this.props.cart.map( (product,i) => {
                    return (
                        <li key={i}>product.name</li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default CartList;