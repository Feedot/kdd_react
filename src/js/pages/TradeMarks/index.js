import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../../containers/Header/index";
import Footer from "../../containers/Footer/index";
import TradeMarksHeader from "../../components/TradeMarksHeader";
import TradeMarksMain from "../../components/TradeMarksMain";
import "./styles.css";

class TradeMarks extends Component {
  render() {
    return (
      <div className="trade_marks">
        <Header />
        <TradeMarksHeader />
        <TradeMarksMain />
        <Footer />
      </div>
    );
  }
}

export default connect(state => ({}))(TradeMarks);
