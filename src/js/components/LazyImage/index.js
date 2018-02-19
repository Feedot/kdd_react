import React, { Component } from "react";
import { connect } from "react-redux";

export default class LazyImage extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  componentDidMount() {
    const img = new Image();
    img.onload = () => {
      this.setState({ loaded: true });
    };
    img.src = this.props.src;
  }
  render() {
    if (!this.state.loaded)
      return <img className="spinner" src={this.props.unloadSrc} />;
    else return <img className="loaded" src={this.props.src} />;
  }
}
