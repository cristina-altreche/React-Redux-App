import {
  FETCH_JOKES_START,
  FETCH_JOKES_SUCCESS,
  FETCH_JOKES_FAILED,
} from "./actions";

const initialState = {
  isLoading: false,
  jokes: [],
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOKES_START:
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    case FETCH_JOKES_SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        jokes: action.payload,
      };
    case FETCH_JOKES_FAILED:
      return {
        ...state,
        error: "actions.payload",
        isLoading: false,
      };
    default:
      return state;
  }
};
