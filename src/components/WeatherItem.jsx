import React, { Component } from "react";
import Temp from "./Temp";
import Wind from "./Wind";

class WeaterItem extends Component {
  state = { isFav: false };

  onClick = () => {
    this.setState({ isFav: !this.state.isFav });
  };

  render() {
    console.log(this.props, this.state);

    const { temp, temp_max, temp_min } = this.props.item.main;
    const { speed, gust } = this.props.item.wind;
    const { isFav } = this.state;

    return (
      <div
        className={`weatherItem ${isFav ? "fav" : ""}`}
        onClick={this.onClick}
      >
        <Temp temp={temp} tempMax={temp_max} tempMin={temp_min} />
        <Wind speed={speed} gust={gust} />
      </div>
    );
  }
}

export default WeaterItem;
