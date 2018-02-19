import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../../containers/Header/index";
import Footer from "../../containers/Footer/index";
import LazyImage from "../../components/LazyImage/index";
import images from "../../images";
import "./styles.css";

import HeaderAbout from "../../containers/HeaderAbout/index";
import SectionAboutUs from "../../containers/SectionAboutUs/index";
import WhatWeHave from "../../components/WhatWeHave/index";

class About extends Component {
  render() {
    return (
      <div className="about">
        <Header />
        <HeaderAbout />
        <SectionAboutUs />
        <WhatWeHave />
        <Footer />
      </div>
    );
  }
}

export default connect(state => ({
  firstColumnText: state.about.columns.first,
  secondColumnText: state.about.columns.second,
  thirdColumnText: state.about.columns.third
}))(About);
