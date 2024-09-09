import CharacterQuoteCard from "./CharacterQuoteCard";

function Quotes({data, onLikeHandler, onDeleteHandler}) {
  return (       <div className="quotes">
        {data.map((item, index) => {
          return <CharacterQuoteCard key={index} data={item} onLikeHandler={onLikeHandler} onDeleteHandler={onDeleteHandler}/>;
        })}
      </div>
 );
}

export default Quotes;