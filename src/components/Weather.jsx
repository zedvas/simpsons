import React, { Component } from "react";
import WeaterItem from "./WeatherItem";

class Weather extends Component {
  render() {
    return this.props.weather.list.map((item) => {
      return <WeaterItem key={item.dt} item={item} />;
    });
  }
}

export default Weather;
