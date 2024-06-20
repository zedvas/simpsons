import React, { Component } from "react";
import axios from "axios";
import CharacterQuotes from "./components/CharacterQuotes";
import "./App.css";
import TotalLikes from "./components/TotalLikes";
import SearchInput from "./components/SearchInput";
import SelectInput from "./components/SelectInput";

class App extends Component {
  state = { inputValue: "" };

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
      return id === quote.id;
    });
    quotes[likedIndex].liked = !quotes[likedIndex].liked;
    this.setState({ quotes: quotes });
    this.getTotalLikes();
  };

  onDeleteHandler = (id) => {
    let quotes = [...this.state.quotes];
    const index = quotes.findIndex((quote) => {
      return quote.id === id;
    });
    quotes.splice(index,1);
    console.log(this.state.quotes)

    this.setState({ quotes: quotes });
    console.log(this.state.quotes)
  };

  getTotalLikes = () => {
    const filteredList = this.state.quotes.filter((quote) => {
      return quote.liked;
    });
    this.setState({ totalLikes: filteredList.length });
  };

  inputHandler = (e) => {
    this.setState({ inputValue: e.target.value });
    let quotes = [...this.state.quotes];
    quotes = quotes.filter((quote) => {
      return quote.character
        .toLowerCase()
        .includes(this.state.inputValue.toLowerCase());
    });
    this.setState({ quotes: quotes });
  };

  // selectHandler = (e) => {
  //   console.log(e.target.value);
  // };

  render() {
    if (!this.state.quotes) {
      return <p>Loading...</p>;
    }

    return (
      <>
        <TotalLikes
          totalLikes={this.state.totalLikes}
        />
        <SearchInput
          inputHandler={this.inputHandler}
          inputValue={this.state.inputValue}
        />
        {/* <SelectInput selectHandler={this.selectHandler} /> */}
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

