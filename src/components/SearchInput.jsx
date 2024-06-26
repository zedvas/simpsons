import { useState } from "react";
import { useDispatch } from "react-redux";
import { SEARCH_INPUT } from "../redux/types";

function SearchInput() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      ></input>
      <button onClick={()=>dispatch({type:SEARCH_INPUT, searchText:inputValue})}>Search</button>
    </div>
  );
}

export default SearchInput;
