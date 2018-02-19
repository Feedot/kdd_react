import React, { Component } from "react";
import { connect } from "react-redux";

class SuccessContent extends Component {
  closeSuccessWindow() {
    this.props.onCloseSuccessWindow();

    if (document.getElementsByClassName("products_list")[0]) {
      let correctArray = this.props.productList.filter(item => {
        if (item.ammount !== 0) return item;
      });

      if (correctArray.length !== 0) {
        this.props.onShowBasketWindow({ type: "array", content: correctArray });
      }

      return;
    }
  }

  render() {
    return (
      <div>
        <p> {this.props.data.text} </p>

        <button onClick={this.closeSuccessWindow.bind(this)}>
          {" "}
          {this.props.data.buttonValue}{" "}
        </button>
      </div>
    );
  }
}

export default connect(
  state => ({
    productList: state.productList.items
  }),
  dispatch => ({
    onCloseSuccessWindow: () => {
      dispatch({ type: "OPEN_SUCCESS_WINDOW" });
    },
    onShowBasketWindow: object => {
      dispatch({ type: "MODAL_WINDOW", payload: object });
      if (window.innerWidth < 900)
        dispatch({ type: "SHOW_CLOSE_MOBILE_FILTER" });
    }
  })
)(SuccessContent);
