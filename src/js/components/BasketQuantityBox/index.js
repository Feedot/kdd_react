import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles.css";

class BasketQuantityBox extends Component {
  render() {
    if (this.props.quantity !== 0) {
      return (
        <div className={"show_quantity"}>
          В корзине {this.props.quantity} товаров
        </div>
      );
    } else {
      return <div className={"show_quantity"}>Корзина пуста</div>;
    }
  }
}

export default connect(state => ({
  quantity: state.sidebar.basket.result.quantity
}))(BasketQuantityBox);
