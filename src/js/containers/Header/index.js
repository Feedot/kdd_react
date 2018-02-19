import React, { Component } from "react";
import { connect } from "react-redux";
import ReactResizeDetector from "react-resize-detector";
import { Link } from "react-router-dom";

import logo from "../../../img/logo.png";
import cartIcon from "../../../img/cart_icon.png";
import ButtonMenu from "../../components/ButtonMenu";
import CustomLink from "../../components/CustomLink/index";
import Navigation from "../../components/Navigation";

import "./header.css";

class Header extends Component {
  changeToMobileClass(e) {
    let button = document
      .querySelector("header")
      .getElementsByTagName("button")[0];
    this.props.changeClass(button);

    if (window.innerWidth > 900) {
      this.props.changeHeaderClass("full_screen");
    } else if (700 < window.innerWidth && window.innerWidth < 900) {
      this.props.changeHeaderClass("tablet");
    } else if (400 < window.innerWidth < 700)
      this.props.changeHeaderClass("mobile");
    else if (window.innerWidth < 400)
      this.props.changeHeaderClass("mini_mobile");
  }

  render() {
    return (
      <header className={this.props.headerClassName}>
        <ReactResizeDetector
          handleWidth
          onResize={this.changeToMobileClass.bind(this)}
        />
        <div className="logo_wrapper">
          <Link className="logo" to={this.props.pathname}>
            <img src={logo} />
          </Link>
        </div>

        <Navigation />

        <CustomLink />

        <ButtonMenu />
      </header>
    );
  }
}

export default connect(
  state => ({
    headerClassName: state.navigation.classes.headerClassName,
    pathname: state.navigation.pathname
  }),

  dispatch => ({
    changeHeaderClass: headerClassName => {
      dispatch({ type: "CHANGE_HEADER_CLASS", payload: headerClassName });
      dispatch({ type: "CLOSE_MOBILE_FILTER" });
    },
    changeClass: button => {
      dispatch({ type: "CHANGE_MENU_BUTTON_CLASS", payload: button });
    }
  })
)(Header);
