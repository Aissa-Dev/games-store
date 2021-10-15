import axios from "axios";
import { popularGamesURL, newGamesURL, upcomingGamesURL } from "../api";

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
