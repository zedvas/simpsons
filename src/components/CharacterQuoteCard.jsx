import React, { Component } from "react";
import LikeButton from "./LikeButton";
import CharacterName from "./CharacterName";
import Image from "./Image";
import Quote from "./Quote";
import DeleteButton from "./DeleteButton";

class CharacterQuoteCard extends Component {
  render() {
    const { character, characterDirection, image, quote, id, liked } = this.props.data;
    return (
      <div className={liked ? "liked quoteItem" : "quoteItem"}>
        <CharacterName characterName={character}/>
        <div className={characterDirection === "Right" ? "main right" : "main"}>
          <Image image={image} characterName={character}/>
          <Quote quote={quote}/>
        </div>
        <LikeButton id={id} liked={liked} onLikeHandler={this.props.onLikeHandler}/>
        <DeleteButton id={id} onDeleteHandler={this.props.onDeleteHandler}/>
      </div>
    );
  }
}

export default CharacterQuoteCard;
