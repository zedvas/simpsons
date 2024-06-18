import React, { Component } from "react";

class Quote extends Component {
  clickHandler = () => {
    this.setState({ liked: !this.state.liked });
  };

  state = {};
  render() {
    const { character, characterDirection, image, quote } = this.props.quote;

    return (
      <div className={this.state.liked ? "liked quoteItem" : "quoteItem"}>
        <h2>{character}</h2>
        <div className={characterDirection === "Right" ? "main right" : "main"}>
          <img
            src={image}
          />
          <p>{quote}</p>
        </div>
        <button onClick={this.clickHandler}>{this.state.liked? "unlike" : "like"}</button>
      </div>
    );
  }
}

export default Quote;
