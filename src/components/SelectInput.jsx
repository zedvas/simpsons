import React, { Component } from "react";
class SelectInput extends Component {
  state = {};
  render() {
    return (
      <select onChange={(e)=>this.props.selectHandler(e)}>
        <option value="ASC">ASC</option>
        <option value="DESC">DESC</option>
      </select>
    );
  }
}

export default SelectInput;
