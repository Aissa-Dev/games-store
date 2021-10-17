const initialState = {
  game: { platforms: [] },
  screenshots: { results: [] },
  isLoading: true
};

export const gameDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DETAILS":
      return {
        ...state,
        game: action.payload.game,
        screenshots: action.payload.screenshots,
        isLoading: false
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
};
