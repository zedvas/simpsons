import React, { Component } from "react";
import axios from "axios";
import Quotes from "./components/Quotes";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    this.getSimpsons();
  }

  getSimpsons = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    this.setState({ quotes: data });
  };

  render() {
    if (!this.state.quotes) {
      return <p>Loading...</p>;
    }

    return <Quotes quotes={this.state.quotes}/>
  }
}

export default App;
