import { useDispatch } from "react-redux";
import { DELETE_QUOTE } from "../redux/types";
function Delete({id}) {
  const dispatch = useDispatch();
return <button onClick={() =>dispatch({type:DELETE_QUOTE, id:id})}>delete</button>;
}

export default Delete;
