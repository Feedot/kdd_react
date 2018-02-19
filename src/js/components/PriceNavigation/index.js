import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles.css";

class PriceNavigation extends Component {
  checkForNumber(event) {
    let theEvent = event || window.event,
      key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    let regex = /[0-9]/;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }
  addInformToFilter(e) {
    let obj =
      e.target.id === "to" && e.target.value === ""
        ? { value: +"Infinity", strim: e.target.id }
        : { value: e.target.value, strim: e.target.id };

    this.props.onAddInformToFilter(obj);
  }

  render() {
    return (
      <div className="price_nav_bar">
        <h4>{this.props.h4}</h4>
        <input
          id="from"
          className="priceNav"
          type="text"
          placeholder="от..."
          onKeyPress={this.checkForNumber.bind(this)}
          onChange={this.addInformToFilter.bind(this)}
        />

        <input
          id="to"
          className="priceNav"
          type="text"
          placeholder="до..."
          onKeyPress={this.checkForNumber.bind(this)}
          onChange={this.addInformToFilter.bind(this)}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    h4: state.sidebar.price.h4
  }),
  dispatch => ({
    onAddInformToFilter: obj => {
      dispatch({ type: "ADD_INFO_TO_FILTER", payload: obj });
    }
  })
)(PriceNavigation);
