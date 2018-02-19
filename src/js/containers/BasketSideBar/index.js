import React, { Component } from "react";
import { connect } from "react-redux";

import BasketForm from "../../components/BasketForm/index";
import "./styles.css";

class BasketSideBar extends Component {
  render() {
    return (
      <div className="basket_side_bar">
        {/*<div className="all_sum">Общая сумма <br/>*/}
        {/*{this.props.price + "₽"}*/}
        {/*</div>*/}
        {/*<BasketForm/>*/}
      </div>
    );
  }
}

export default connect(
  state => ({
    price: state.sidebar.basket.result.price
  }),
  dispatch => ({})
)(BasketSideBar);
