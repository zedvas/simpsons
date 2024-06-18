import React, { Component } from "react";
import Quote from "./Quote";
class Quotes extends Component {
  render() {    
    console.log(this.props.quotes)
    return (
      <>
      
        {this.props.quotes.map((quote, index) => {
          return <Quote key={index} quote={quote}/>;
        })}
      </>
    );
  }
}

export default Quotes;
