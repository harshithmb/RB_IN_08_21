import axios from "axios";
import React, { Component } from "react";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { product: {} };
  }
  componentDidMount() {
    const id = this.props.match.params.productid;
    const url = "https://5d76bf96515d1a0014085cf9.mockapi.io/product/";
    axios(url + id).then((res) => this.setState({ product: res.data }));
  }
  render() {
    const {
      brand = "",
      description = "",
      id = "",
      name = "",
      photos = [],
      preview = "",
    } = this.state.product;

    return (
      <div>
        <h1>{name}</h1>
        <h2>{description}</h2>
      </div>
    );
  }
}

export default ProductDetails;
