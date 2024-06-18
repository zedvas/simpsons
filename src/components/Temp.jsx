import React, { Component } from "react";

class Temp extends Component {
  render() {
    const { temp, tempMin, tempMax } = this.props;
    return (
      <>
        <p>Average temp: {temp}</p>
        <p>Max temp: {tempMin}</p>
        <p>Min temp: {tempMax}</p>
      </>
    );
  }
}

export default Temp;
