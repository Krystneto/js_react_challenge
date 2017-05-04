import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './Home';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import CartList from './CartList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      selectedProduct: null,
      cart: []
    }
    this.onSelectedProduct = this.onSelectedProduct.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.handleSubmitOrder = this.handleSubmitOrder.bind(this);
}
  
  componentWillMount() {
    const productsURL = "https://js-challenge-api.herokuapp.com/products.json";
    // const test = "http://localhost:3001/products.json";
    fetch(productsURL, {
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors'
    })
    .then( res => res.json() )
    .then( products => {
      this.setState({
        products: products.faker
      })
    })
  }
  
  onSelectedProduct(product) {
    this.setState({
      selectedProduct: product
    })
  }

  handleAddProduct(product) {
    let newProduct = Object.assign(product);
    let postProductURL = "https://js-challenge-api.herokuapp.com/products"
    let testPost = "http://localhost:3001/products"

    this.setState( prevState => ({
      cart: prevState.cart.concat([newProduct])
    }))
    
    fetch(testPost, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then( console.log(`${product.name} added to the cart`) );
  
  }

  handleRemoveProduct(product) {
    this.setState( prevState => ({
      cart: prevState.cart.filter(cartItem => {
        return cartItem.id !== product.id;
      })
    }))
  }
  
  handleSubmitOrder() {
    this.setState({
      cart: []
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route 
            exact={true} path="/products" 
            component={() => {
              return <ProductList products={this.state.products} onSelectedProduct={this.onSelectedProduct}/>
              } 
            }
          />
          <Route 
            path="/products/:productId" 
            component={() => {
              return <ProductDetail products={this.state.products} selectedProduct={this.state.selectedProduct} addProduct={this.handleAddProduct} removeProduct={this.handleRemoveProduct}/>
              } 
            }
          />
          <Route 
            path="/cart" 
            component={() => <CartList cart={this.state.cart} submitOrder={this.handleSubmitOrder} removeProduct={this.handleRemoveProduct}/>} 
          />
        </div>
      </Router>
    )
  }
}
 
export default App;
