import { intialState } from "./initialState";
import {SET_QUOTES, SEARCH_INPUT, TOGGLE_LIKE, DELETE_QUOTE} from './types.js'

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case SET_QUOTES:
      const copy = { ...state };
      copy.quotes = action.quotes;
      return copy;

    case TOGGLE_LIKE: {
      const copy = { ...state };
      const index = copy.quotes.findIndex((quote) => {
        return quote.id === action.id;
      });
      copy.quotes[index].liked = !copy.quotes[index].liked;
      return { ...state, quotes: copy };
    }
    case DELETE_QUOTE: {
      const copy = { ...state };
      const index = copy.quotes.findIndex((quote) => {
        return quote.id === action.id;
      });
      copy.quotes.splice(index, 1);
      return { ...state, quotes: copy };
    }
    case SEARCH_INPUT: {
      return state;
    }
    default:
      return state;
  }
}
