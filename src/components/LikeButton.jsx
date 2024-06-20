function LikeButton({ liked, id, onLikeHandler }) {
  return (
    <button onClick={() => onLikeHandler(id)}>
      {liked ? "dislike" : "like"}
    </button>
  );
}

export default LikeButton;
