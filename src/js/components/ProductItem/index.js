import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles.css";

import images from "../../images";
import LazyImage from "../LazyImage/index";

class ProductItem extends Component {
  showModalWindow() {
    this.props.onShowModalWindow({
      type: "object",
      content: this.activeItem
    });
  }

  render() {
    let classMore = this.props.classes.buttonMore,
      classInBasket = this.props.classes.buttonInBasket;
    this.props.items.map(item => {
      if (item.name === this.props.name) this.activeItem = item;
    });

    if (this.activeItem.ammount === 0) classMore += " active";
    else classInBasket += " active";

    return (
      <div className={this.props.classes.mainWrapper}>
        <div className="img_wrapper">
          <div className="shadow_wrapper" />
          <LazyImage unloadSrc="spiner.svg" src={images[this.activeItem.img]} />
        </div>

        <h3>{this.activeItem.name.toUpperCase()}</h3>
        <div className="button_group">
          <span className={this.props.classes.priceClassName}>
            {"₽" + this.activeItem.price}
          </span>
          <button
            className={classMore}
            onClick={this.showModalWindow.bind(this)}
          >
            {" "}
            + Добавить
          </button>
          <button
            className={classInBasket}
            onClick={this.showModalWindow.bind(this)}
          >
            В корзине
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    classes: state.productList.classes,
    items: state.productList.items
  }),
  dispatch => ({
    onShowModalWindow: object => {
      dispatch({ type: "MODAL_WINDOW", payload: object });
    }
  })
)(ProductItem);
