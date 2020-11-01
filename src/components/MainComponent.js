import React, { Component } from 'react';
import Products from './ProductComponent';
import Header from './HeaderComponent';
import Jumbo from './JumboComponent';
import Image from 'reactstrap';
import { PRODUCTS } from '../shared/products';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: PRODUCTS,
    };
  }

  render() {
    return (
      <div>
          <Header />
          <Jumbo />
          <Products products={this.state.products}/>
      </div>
    );
  }
}

export default Main;