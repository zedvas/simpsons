import axios from "axios";
import CharacterQuotes from "./components/CharacterQuotes";
import "./App.css";
import TotalLikes from "./components/TotalLikes";
import SearchInput from "./components/SearchInput";
// import SelectInput from "./components/SelectInput";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_QUOTES } from "./redux/types";

const App = () => {
  const quotes = useSelector(state=>state.quotes);
  const dispatch = useDispatch();


  const getSimpsons = async () => { 
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    data.forEach((data, index) => {
      data.id = index + 1;
    });
    dispatch({type: SET_QUOTES, data})
  };

  useEffect(() =>{ getSimpsons()}, []); //had to put usesimpsons in the dependancy array to get rid of erro. why?

  const getTotalLikes = () => {
    if (!quotes) return;
    const filteredList = quotes.filter((quote) => {
      return quote.liked;
    });
    return filteredList.length;
  }

  return (
    <>
      <TotalLikes
        totalLikes={getTotalLikes()}
      />
      <SearchInput/>
      {/* <SelectInput selectHandler={this.selectHandler} /> */}
      <CharacterQuotes/>
    </>
  );
};

export default App;
