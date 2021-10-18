import axios from "axios";
import {
  popularGamesURL,
  newGamesURL,
  upcomingGamesURL,
  searchedGameURL
} from "../api";

export const loadGames = () => async (dispatch) => {
  //fetch data
  const popularGamesData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());

  dispatch({
    type: "FETCH_GAME",
    payload: {
      popular: popularGamesData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingGamesData.data.results
    }
  });
};

export const fetchSearch = (gameName) => async (dispatch) => {
  const searchedGames = await axios.get(searchedGameURL(gameName));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchedGames.data.results
    }
  });
};

export const clearSearch = () => {
  return {
    type: "CLEAR_SEARCH"
  };
};
