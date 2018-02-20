import React, { Component } from "react";
import { connect } from "react-redux";

import iconUp from "../../../img/arrow_up.png";
import cartIcon from "../../../img/cart_icon.png";
import filterIcon from "../../../img/filter_icon.png";
import { goToTop } from "react-scrollable-anchor";
import { Link , Redirect} from "react-router-dom";

import ProductItem from "../../components/ProductItem/index";
import "./styles.css";



class ProductList extends Component {

  returnLink(props) {

      if(props !==0 ) {
          return(
              <Link to={'/basket'} >
                <img src={cartIcon} alt="" />
              </Link>
          )
      }else {
          return (
              <Link to={'/products'} >
                <img src={cartIcon} alt="" />
              </Link>
          )
      }
  }
  showMobileFilter(e) {
    this.props.onShowMobileFilter(e.target.className);
  }
  showBasketWindow() {
    let correctArray = this.props.items.filter(item => {
      if (item.ammount !== 0) return item;
    });

    if (correctArray.length !== 0) {
      this.props.onShowModalWindow({
        type: "array",
        content: correctArray
      });
    }
  }
  goTop() {
    goToTop();
  }

  render() {
    return (
      <div>
        <div>
          <button className={this.props.name} onClick={this.goTop.bind(this)}>
            <img src={iconUp} alt="" />
          </button>
        </div>

        <article className={this.props.name}>
          <div className="filter">
            <button
              className="filt_but"
              onClick={this.showMobileFilter.bind(this)}
            >
              <img src={filterIcon} alt="" />
            </button>
              {this.returnLink(this.props.quantity)}
          </div>

          {this.props.items.map((item, index) => {
            if (
              (this.props.filterType === item.type ||
                this.props.filterType === "allProducts") &&
              item.price >= this.props.priceFrom &&
              item.price <= this.props.priceTo
            ) {
              return <ProductItem name={item.name} key={index} />;
            }
          })}
        </article>
      </div>
    );
  }
}

export default connect(
  state => ({
    items: state.productList.items,
    filterType: state.sidebar.filter.type,
    priceFrom: state.sidebar.filter.from,
    priceTo: state.sidebar.filter.to,
    quantity: state.sidebar.basket.result.quantity
  }),
  dispatch => ({
    onShowMobileFilter: className => {
      dispatch({ type: "SHOW_CLOSE_MOBILE_FILTER", payload: className });
    },
    onShowModalWindow: object => {
      dispatch({ type: "MODAL_WINDOW", payload: object });
    }
  })
)(ProductList);
