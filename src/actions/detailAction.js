import axios from "axios";
import { gameDetailsURL, gameScreenshotsURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL"
  });
  try {
    const detailData = await axios.get(gameDetailsURL(id));
    const screenshotsData = await axios.get(gameScreenshotsURL(id));
    dispatch({
      type: "FETCH_DETAILS",
      payload: {
        game: detailData.data,
        screenshots: screenshotsData.data
      }
    });
  } catch (err) {
    console.log("error : ", err);
    dispatch({
      type: "ERROR",
      payload: {}
    });
  }
};
