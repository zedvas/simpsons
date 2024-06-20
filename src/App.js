import React, { Component } from "react";
import axios from "axios";
import CharacterQuotes from "./components/CharacterQuotes";
import "./App.css";
import TotalLikes from "./components/TotalLikes";

class App extends Component {
  state = {};

  componentDidMount() {
    this.getSimpsons();
  }

  getSimpsons = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    data.forEach((data, index) => {
      data.id = index + 1;
    });
    this.setState({ quotes: data });
  };

  onLikeHandler = (id) => {
    let quotes = [...this.state.quotes];
    const likedIndex = quotes.findIndex((quote) => {
     return id === quote.id
    });
    quotes[likedIndex].liked = !quotes[likedIndex].liked
this.setState({quotes: quotes});
this.getTotalLikes();
  }

  onDeleteHandler = (id) => {
    let quotes = [...this.state.quotes];
    quotes = quotes.filter(quote=> {
      return quote.id !== id
    })
    this.setState({quotes: quotes})
  }

  getTotalLikes = () => {
    const filteredList = this.state.quotes.filter(quote=> {return quote.liked})
    this.setState({totalLikes: filteredList.length})
  }

  render() {
    if (!this.state.quotes) {
      return <p>Loading...</p>;
    }

    return (
      <>
      <TotalLikes totalLikes={this.state.totalLikes}/>
      <CharacterQuotes
        data={this.state.quotes}
        onLikeHandler={this.onLikeHandler}
        onDeleteHandler={this.onDeleteHandler}
      />
      </>
    );
  }
}

export default App;
