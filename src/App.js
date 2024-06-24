import axios from "axios";
import CharacterQuotes from "./components/CharacterQuotes";
import "./App.css";
import TotalLikes from "./components/TotalLikes";
import SearchInput from "./components/SearchInput";
// import SelectInput from "./components/SelectInput";
import React, { useState, useEffect, useCallback } from "react";

const App = () => {
  console.log("app is running")

  const [inputValue, setInputValue] = useState("");
  const [quotes,setQuotes] = useState([])

  useEffect(() => getSimpsons, []);

  const getSimpsons = async () => { 
    console.log("get simpsons is is running")

    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    data.forEach((data, index) => {
      data.id = index + 1;
    });
    setQuotes(data);
  };

  const onLikeHandler = useCallback((id) => {
    console.log("like handler is is running")

    let _quotes = [...quotes];
    const likedIndex = _quotes.findIndex((quote) => {
      return id === quote.id;
    });
    _quotes[likedIndex].liked = !_quotes[likedIndex].liked;
    setQuotes(_quotes);
  },[quotes]
)
  const onDeleteHandler = useCallback((id) => {
    console.log("delete handler is running")

    let _quotes = [...quotes];
    const index = _quotes.findIndex((quote) => {
      return quote.id === id;
    });   

    _quotes.splice(index, 1);
    setQuotes(_quotes);
  },[quotes])

  const getTotalLikes = useCallback(() => {
    console.log("get total likes is is running")
    const filteredList = quotes.filter((quote) => {
      return quote.liked;
    });
    return filteredList.length;
  },[quotes])


  const inputHandler = (e) => {
    console.log("input handler is running");
    setInputValue(e.target.value);
  };

  // const selectHandler = (e) => {
  //   console.log(e.target.value);
  // };

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
