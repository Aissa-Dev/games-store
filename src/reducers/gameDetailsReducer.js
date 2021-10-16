const initialState = {
  game: {},
  screenshots: {}
};

export const gameDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DETAILS":
      return {
        ...state,
        game: action.payload.game,
        screenshots: action.payload.screenshots
      };
    default:
      return state;
  }
};
