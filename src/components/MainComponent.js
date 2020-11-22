import React, { Component } from 'react';
import { PRODUCTS } from '../shared/products';
import ProductGrid from './ProductComponent';
import HeadImage from './HeadImageComponent';
import Header from './HeaderComponent';

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
          <HeadImage />
          <ProductGrid products={this.state.products}/>
      </div>
    );
  }
}

export default Main;