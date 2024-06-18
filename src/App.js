import React, { Component } from "react";
import axios from "axios";
import Weather from "./components/Weather";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    this.getWeather();

    setInterval(() => {
      this.getWeather();
    }, 60000);
  }

  getWeather = async () => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=1.22&lon=2.22&APPID=17a3e02a9cc47ed1eac90bc2f9c0012a`
    );
    this.setState({ weather: data });
    console.log(data.list.length)
  };

  render() {
    if (!this.state.weather) {
      return <p>Loading...</p>;
    }

    return <Weather weather={this.state.weather} />;
  }
}

export default App;
