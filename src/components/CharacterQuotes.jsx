import { useSelector } from "react-redux";
import CharacterQuoteCard from "./CharacterQuoteCard";

function Quotes() {
  let quotes = useSelector((state) => state.quotes);
  const searchText = useSelector((state) => state.searchText);
  console.log(quotes)
if (!quotes) {
    return <h2>No quotes here</h2>;
  } 
  
quotes.map((item, index) => {
  return <CharacterQuoteCard key={index} data={item} />;
  
  })

  // commenting out until bug is fixed
  // else if (searchText) {
  //   quotes = quotes.filter((quote) => {
  //     return quote.character.toLowerCase().includes(searchText.toLowerCase());   
  //   });
// }
}
export default Quotes;
