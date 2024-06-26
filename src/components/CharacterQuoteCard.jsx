import LikeButton from "./LikeButton";
import CharacterName from "./CharacterName";
import Image from "./Image";
import Quote from "./Quote";
import DeleteButton from "./DeleteButton";

function CharacterQuoteCard({
  data: { character, characterDirection, image, quote, id, liked }
}) {  

  return (
    <div className={liked ? "liked quoteItem" : "quoteItem"}>
      <CharacterName characterName={character} />
      <div className={characterDirection === "Right" ? "main right" : "main"}>
        <Image image={image} characterName={character} />
        <Quote quote={quote} />
      </div>
      <LikeButton id={id} liked={liked}/>
      <DeleteButton id={id} />
    </div>
  );
}

export default CharacterQuoteCard;
