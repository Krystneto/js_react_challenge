import React from 'react';
import { PageHeader, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CartNav from './CartNav';

const CartList = ({ cart, submitOrder, removeProduct }) => {
    const { pageHeaderStyle, liStyle } = styles;

    return (
        <div>
            <CartNav />
            
            <PageHeader style={pageHeaderStyle}>
                Cart List
            </PageHeader>
            
            <ul style={liStyle} className="list-unstyled">
                {cart.map( (product,i) => { 
                    return (
                        <li style={liStyle} key={i}>{product.name} <Button 
                            bsSize="xsmall" 
                            bsStyle={"danger"}
                            onClick={() => removeProduct(product)}>
                                Remove
                            </Button>
                        </li>
                    )}    
                )}
            </ul>
            
            <LinkContainer to="/products" style={liStyle}>
                <Button bsStyle="success" onClick={() => submitOrder()}>Place Order</Button>
            </LinkContainer>
        </div>
    );
};

const styles = {
    pageHeaderStyle: {
        textAlign: 'center'
    },
    liStyle: {
        margin: 10,
    }
}
export default CartList;