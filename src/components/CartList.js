import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CartNav from './CartNav';

const CartList = ({ cart, submitOrder }) => {
    
    return (
        <div>
            <CartNav />
            <h1>Cart List</h1>
            <ul>
                {cart.map( (product,i) => {
                    return (
                        <li key={i}>{product.name}</li>
                        )
                    })
                }
            </ul>
            <LinkContainer to="/products">
                <Button onClick={() => submitOrder()}>Place Order</Button>
            </LinkContainer>
        </div>
    );
};

export default CartList;