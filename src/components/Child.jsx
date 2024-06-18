import React, { Component } from "react";

class Child extends Component {
  state = { count: 0 };

  constructor() {
    super();
    console.log("constructor function ran, component is ALIVE!");
  }

  componentDidMount() {
    console.log("componentDidMount function ran, HTML in the DOM");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate function ran, NEW HTML in the dom");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount function ran, I am about to unmount");
  }

  render() {
    console.log("render function ran, the HTML is getting created");

    return <p>I am the Child component!, {this.props.count}</p>;
  }
}

export default Child;
