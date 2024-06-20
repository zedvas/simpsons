import LikeButton from "./LikeButton";
import CharacterName from "./CharacterName";
import Image from "./Image";
import Quote from "./Quote";
import DeleteButton from "./DeleteButton";

function CharacterQuoteCard({
  data: { character, characterDirection, image, quote, id, liked },
  onLikeHandler,
  onDeleteHandler,
}) {
  return (
    <div className={liked ? "liked quoteItem" : "quoteItem"}>
      <CharacterName characterName={character} />
      <div className={characterDirection === "Right" ? "main right" : "main"}>
        <Image image={image} characterName={character} />
        <Quote quote={quote} />
      </div>
      <LikeButton id={id} liked={liked} onLikeHandler={onLikeHandler} />
      <DeleteButton id={id} onDeleteHandler={onDeleteHandler} />
    </div>
  );
}

export default CharacterQuoteCard;
