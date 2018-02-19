import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles.css";
import ModalContentPage from "../ModalContentPage/index";
import BasketContent from "../BasketContent/index";

class ModalHeader extends Component {
  closeModalWindow() {
    this.props.onCloseModalWindow("");
  }
  returnCorrectWindow() {
    if (this.props.windowProduct) {
      return <ModalContentPage />;
    } else if (this.props.windowBasket) {
      return <BasketContent />;
    }
  }

  render() {
    return (
      <div className={this.props.data.contentPage}>
        {/*<div className={this.props.data.headerContentPage}>*/}
        {/*<p>{this.props.name}</p>*/}
        {/*<button className="close" onClick={this.closeModalWindow.bind(this)}>Закрыть</button>*/}
        {/*</div>*/}
        {this.returnCorrectWindow()}
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    onCloseModalWindow: emptyString => {
      dispatch({ type: "MODAL_WINDOW", payload: emptyString });
    }
  })
)(ModalHeader);
