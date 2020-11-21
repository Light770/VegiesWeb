import React, { Component } from 'react';
import { PRODUCTS } from '../shared/products';
import ProductGrid from './ProductComponent';

/*
          <Header />
          <HeadImage />
          */

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
          <ProductGrid products={this.state.products}/>
      </div>
    );
  }
}

export default Main;