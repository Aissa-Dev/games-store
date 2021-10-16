import { combineReducers } from "redux";
import { gameDetailsReducer } from "./gameDetailsReducer";
import gamesReducer from "./gamesReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  details: gameDetailsReducer
});

export default rootReducer;
