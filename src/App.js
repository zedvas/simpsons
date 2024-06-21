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
    // this.getTotalLikes(); //satte is not yet updated
  };

  onDeleteHandler = (id) => {
    let quotes = [...this.state.quotes];
    const index = quotes.findIndex((quote) => {
      return quote.id === id;
    });
    quotes.splice(index,1);
    this.setState({ quotes: quotes });
  };

  getTotalLikes = () => {
    const filteredList = this.state.quotes.filter((quote) => {
      return quote.liked;
    });
    return filteredList.length
    // this.setState({ totalLikes: filteredList.length });
  }; 
  
  //Not working because I'm creating a second piece of state here?
  //chnage to return filteredList.length instead of setting state and then call func in render

  inputHandler = (e) => {
    this.setState({ inputValue: e.target.value });
    // let quotes = [...this.state.quotes];
    // quotes = quotes.filter((quote) => {
    //   return quote.character
    //     .toLowerCase()
    //     .includes(this.state.inputValue.toLowerCase());
    // });
    // this.setState({ quotes: quotes });
  };
  //Not working because creating unecessary state?
  //Change to pass the results of this func to the render?
  //But how would I send a variable which exists in a function? 
  //Jon said put the functions content to the render but where?

  // selectHandler = (e) => {
  //   console.log(e.target.value);
  // };

  render() {
    if (!this.state.quotes) {
      return <p>Loading...</p>;
    }


    let quotes = [...this.state.quotes];
    quotes = quotes.filter((quote) => {
      return quote.character
        .toLowerCase()
        .includes(this.state.inputValue.toLowerCase());
    });


    return (
      <>
        <TotalLikes
          totalLikes={this.getTotalLikes()}
          // totalLikes={this.state.totalLikes}
        />
        <SearchInput
          inputHandler={this.inputHandler}
          inputValue={this.state.inputValue}
        />
        {/* <SelectInput selectHandler={this.selectHandler} /> */}
        <CharacterQuotes
          data={quotes}
          onLikeHandler={this.onLikeHandler}
          onDeleteHandler={this.onDeleteHandler}
        />
      </>
    );
  }
}

export default App;

