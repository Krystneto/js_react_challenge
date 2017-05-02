import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
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
      <Router>
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route exact path="/products" component={() => <ProductList products={this.state.products} />} />
        </div>
      </Router>
    )
  }
}

export default App;
