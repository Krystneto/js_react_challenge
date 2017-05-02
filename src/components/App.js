import React, { Component } from 'react';
import ProductList from './ProductList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
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
  
  render() {
    return (
      <div>
        <h1>hello</h1>
        <ProductList products={this.state.products} />
      </div>
    )
  }
}

export default App;
