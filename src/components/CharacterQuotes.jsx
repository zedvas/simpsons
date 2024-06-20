import React, { Component } from "react";
import CharacterQuoteCard from "./CharacterQuoteCard";
class Quotes extends Component {
  render() {    
    return (
      <>
        {this.props.data.map((item, index) => {
          return <CharacterQuoteCard key={index} data={item} onLikeHandler={this.props.onLikeHandler} onDeleteHandler={this.props.onDeleteHandler}/>;
        })}
      </>
    );
  }
}

export default Quotes;
