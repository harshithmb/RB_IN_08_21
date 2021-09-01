import React, { Component } from "react";
import axios from "axios";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const url = "https://5d76bf96515d1a0014085cf9.mockapi.io/product";
    axios(url).then((res) => this.setState({ products: res.data }));
  }
  render() {
    const { products } = this.state;
    return (
      <div>
        <h1>Products</h1>
        <div>
          {products.length &&
            products.map((item, index) => {
              return (
                <div>
                  <img src={item.preview} width="300" />
                  <h5>{item.name}</h5>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Products;
