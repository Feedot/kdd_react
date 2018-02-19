import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles.css";
import ModalHeader from "../ModalHeader/index";
import SuccessWindow from "../SuccessWindow/index";

class ModalWindow extends Component {
  componentDidMount() {
    let stopScrolling;

    window.document.onscroll = e => {
      let modalPage =
        document.getElementsByClassName("modal_page")[0] ||
        document.getElementsByClassName("side_bar active")[0];

      if (modalPage && !stopScrolling)
        stopScrolling = e.target.scrollingElement.scrollTop;

      if (modalPage && stopScrolling) {
        document.body.scrollTop = stopScrolling;

        document.documentElement.scrollTop = stopScrolling;
      }

      if (!modalPage) stopScrolling = null;

      e.preventDefault();

      return false;
    };
  }

  render() {
    if (this.props.openedProduct) {
      let pageName = this.props.windowOfProduct.pageName;
      return (
        <div className={this.props.commonClasses.mainWrapper}>
          <ModalHeader
            name={pageName}
            windowProduct={this.props.openedProduct}
            data={this.props.commonClasses}
          />
        </div>
      );
    } else if (this.props.openedBasket) {
      let pageName = this.props.windowOfBasket.pageName;
      return (
        <div className={this.props.commonClasses.mainWrapper}>
          <ModalHeader
            name={pageName}
            windowBasket={this.props.openedBasket}
            data={this.props.commonClasses}
          />
        </div>
      );
    } else if (this.props.openedSaled) {
      return (
        <div className={this.props.commonClasses.mainWrapper}>
          <SuccessWindow
            name={this.props.commonClasses.contentPage}
            data={this.props.windowOfSaled}
          />
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default connect(
  state => ({
    windowOfProduct: state.modalWindow.windowOfProduct,
    windowOfBasket: state.modalWindow.windowOfBasket,
    commonClasses: state.modalWindow.commonClasses,
    contentBasket: state.modalWindow.windowOfProduct.content,
    openedProduct: state.modalWindow.windowOfProduct.opened,
    openedBasket: state.modalWindow.windowOfBasket.opened,
    openedSaled: state.modalWindow.windowOfSaled.opened,
    windowOfSaled: state.modalWindow.windowOfSaled
  }),
  dispatch => ({})
)(ModalWindow);
