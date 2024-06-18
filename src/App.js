import React, { Component } from "react";
import Child from "./components/Child";

class App extends Component {
  state = { isActive: false, count: 0 };

  onToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    return (
      <>
        <button onClick={this.onToggle}>Toggle</button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Add 1 to count
        </button>
        {this.state.isActive && <Child count={this.state.count} />}
      </>
    );
  }
}

export default App;
