import axios from "axios";
import CharacterQuotes from "./components/CharacterQuotes";
import "./App.css";
import TotalLikes from "./components/TotalLikes";
import SearchInput from "./components/SearchInput";
// import SelectInput from "./components/SelectInput";
import React, { useState, useEffect } from "react";

const App = () => {

  const [inputValue, setInputValue] = useState("");
  const [quotes,setQuotes] = useState([])

  useEffect(() => getSimpsons, []);

  const getSimpsons = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    data.forEach((data, index) => {
      data.id = index + 1;
    });
    setQuotes(data);
  };

  const onLikeHandler = (id) => {
    let _quotes = [...quotes];
    const likedIndex = _quotes.findIndex((quote) => {
      return id === quote.id;
    });
    _quotes[likedIndex].liked = !_quotes[likedIndex].liked;
    setQuotes(_quotes);
  };

  const onDeleteHandler = (id) => {
    let _quotes = [...quotes];
    const index = _quotes.findIndex((quote) => {
      return quote.id === id;
    });   

    _quotes.splice(index, 1);
    setQuotes(_quotes);
  };

  const getTotalLikes = () => {
    const filteredList = quotes.filter((quote) => {
      return quote.liked;
    });
    return filteredList.length;
  };


  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  // const selectHandler = (e) => {
  //   console.log(e.target.value);
  // };

console.log(quotes)
  if (!quotes) {
    return <p>Loading...</p>;
  }

  let _quotes = [...quotes];
  _quotes = _quotes.filter((quote) => {
    return quote.character.toLowerCase().includes(inputValue.toLowerCase());
  });

  return (
    <>
      <TotalLikes
        totalLikes={getTotalLikes()}
      />
      <SearchInput inputHandler={inputHandler} inputValue={inputValue} />
      {/* <SelectInput selectHandler={this.selectHandler} /> */}
      <CharacterQuotes
        data={_quotes}
        onLikeHandler={onLikeHandler}
        onDeleteHandler={onDeleteHandler}
      />
    </>
  );
};

export default App;
