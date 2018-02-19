import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Header from "../../containers/Header/index";
import Footer from "../../containers/Footer/index";
import LazyImage from "../../components/LazyImage/index";
import images from "../../images";
import "./styles.css";

import BasketContent from "../../containers/BasketContent";

class Basket extends Component {
  render() {
    if (this.props.quantity !== 0) {
      return (
        <div className="basket">
          <Header />

          <BasketContent />

          <Footer />
        </div>
      );
    } else {
      return <Redirect to={"/kdd_react/"} />;
    }
  }
}

export default connect(state => ({
  quantity: state.sidebar.basket.result.quantity
}))(Basket);
