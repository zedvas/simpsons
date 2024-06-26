import { useDispatch } from "react-redux";
import { TOGGLE_LIKE } from "../redux/types";

function LikeButton({ liked, id }) {

  const dispatch = useDispatch()
  return (
    <button onClick={() => dispatch({type: TOGGLE_LIKE, id: id})}>
      {liked ? "dislike" : "like"}
    </button>
  );
}

export default LikeButton;
