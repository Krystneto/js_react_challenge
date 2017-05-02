import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './Home';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import ProductsProp from './ProductsProp';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      selectedProduct: null
    }
    this.onSelectedProduct = this.onSelectedProduct.bind(this);
}
  
  componentWillMount() {
    // const productsURL = "https://js-react-challenge.herokuapp.com/products";
    const test = "http://localhost:3001/products";
    fetch(test, {
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
    console.log(product)
    this.setState({
      selectedProduct: product
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route exact path="/products" render={() => <ProductList products={this.state.products} onSelectedProduct={this.onSelectedProduct}/>} />
          <Route path="/products/:productId" component={() => <ProductDetail products={this.state.products} selectedProduct={this.state.selectedProduct}/>} />
        </div>
      </Router>
    )
  }
}
 
export default App;
