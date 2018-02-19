import React, { Component } from "react";

import "./styles.css";

class HeaderAbout extends Component {
  render() {
    return (
      <div className="header_about">
        <div className="wrapper">
          <h1>
            Купеческий дом Донбасс
            <span>17 лет на рынке</span>
            <a href="#aboutUs">подробнее</a>
          </h1>
        </div>
      </div>
    );
  }
}

export default HeaderAbout;
