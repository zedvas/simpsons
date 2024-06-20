import CharacterQuoteCard from "./CharacterQuoteCard";

function Quotes({data, onLikeHandler, onDeleteHandler}) {
  return (       <>
        {data.map((item, index) => {
          return <CharacterQuoteCard key={index} data={item} onLikeHandler={onLikeHandler} onDeleteHandler={onDeleteHandler}/>;
        })}
      </>
 );
}

export default Quotes;