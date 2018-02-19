import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BasketQuantityBox from "../../components/BasketQuantityBox/index";

import "./styles.css";

class CustomLink extends Component {
  render() {
    if (this.props.basketAmmount === 0) {
      return (
        <div className="con">
          <button />
          {/*<BasketQuantityBox/>*/}
        </div>
      );
    } else {
      return (
        <div className="con">
          <Link to={"/kdd_react/basket"} />

          {/*<BasketQuantityBox/>*/}
        </div>
      );
    }
  }
}

export default connect(state => ({
  basketAmmount: state.sidebar.basket.result.quantity
}))(CustomLink);
