function SearchInput({inputHandler, inputValue}) {
  return (
    <input
      type="text"
      onChange={(e) => {
        inputHandler(e);
      }}
      value={inputValue}
    ></input>
  );
}

export default SearchInput;
