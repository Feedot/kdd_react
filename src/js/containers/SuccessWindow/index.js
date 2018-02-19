import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles.css";
import SuccessContent from "../../components/SuccessContent/index";

class SuccessWindow extends Component {
  closeSuccessWindow() {
    this.props.onCloseSuccessWindow();
  }

  correctContent(data) {
    switch (true) {
      case data.success.bool:
        return <SuccessContent data={data.success} />;
        break;

      case data.errror.bool:
        return <SuccessContent data={data.errror} />;
        break;

      case data.successCont.bool:
        return <SuccessContent data={data.successCont} />;
        break;

      case data.fieldError.bool:
        return <SuccessContent data={data.fieldError} />;
        break;

      default:
        return <div />;
        break;
    }

    // if (data.success.bool) return <SuccessContent data={data.success}/>
    //
    // if (data.errror.bool) return <SuccessContent data={data.errror}/>
    //
    // if (data.successCont.bool) return <SuccessContent data={data.successCont}/>
    //
    // if (data.fieldError.bool) return <SuccessContent data={data.successCont}/>
  }

  render() {
    return (
      <div className={this.props.name + " success"}>
        {this.correctContent(this.props.data)}
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    onCloseSuccessWindow: () => {
      dispatch({ type: "OPEN_SUCCESS_WINDOW" });
    }
  })
)(SuccessWindow);
