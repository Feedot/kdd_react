import React, { Component } from "react";
import { connect } from "react-redux";

import images from "../../images";
import "./styles.css";

class BasketItem extends Component {
  checkForNumber(e) {
    let theEvent = e || window.event,
      key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);

    let regex = /[0-9]/;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  deleteItem() {
    this.props.onDeleteItem(this.props.data.name, this.props.content.length);
  }
  changeAmmountBasketItem() {
    if (this.input.value !== "" && +this.input.value !== 0) {
      this.props.onChangeAmmountBasketItem({
        ammount: +this.input.value,
        name: this.props.data.name
      });
    }
  }

  render() {
    return (
      <div>
        <div className="basket_item">
          <img src={images[this.props.data.img]} />
          <p>{this.props.data.name}</p>
          <div className="name_price_ammount">
            <span>{this.props.data.price + "₽"}</span>
            <input
              type="text"
              ref={input => (this.input = input)}
              onChange={this.changeAmmountBasketItem.bind(this)}
              onKeyPress={this.checkForNumber.bind(this)}
              maxLength="3"
              defaultValue={this.props.data.ammount}
            />
          </div>
          <button className="delete" onClick={this.deleteItem.bind(this)}>
            <span />
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    content: state.modalWindow.windowOfBasket.content
  }),
  dispatch => ({
    onDeleteItem: (itemName, length) => {
      dispatch({ type: "DELETE_BASKET_ITEM", payload: itemName });
      dispatch({ type: "ADD_TO_BASKET" });
      dispatch({
        type: "CHANGE_AMMOUNT",
        payload: { ammount: 0, name: itemName }
      });

      if (length === 1) dispatch({ type: "MODAL_WINDOW", payload: "" });
    },
    onChangeAmmountBasketItem: object => {
      dispatch({ type: "CHANGE_AMMOUNT", payload: object });
      dispatch({ type: "ADD_TO_BASKET" });
    }
  })
)(BasketItem);
