import axios from "axios";

//TYPES
export const FETCH_JOKES_START = "FETCH_JOKES_START";
export const FETCH_JOKES_SUCCESS = "FETCH_JOKES_SUCCESS";
export const FETCH_JOKES_FAILED = "FETCH_JOKES_FAILED";

//CREATORS
export const getDadJoke = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_JOKES_START });
    axios
      .get("https://icanhazdadjoke.com/slack")
      .then((res) => {
        console.log(res);
        dispatch({ type: FETCH_JOKES_SUCCESS, payload: res.data.attachments });
      })
      .catch((err) => {
        // console.log(err);
        dispatch({ type: FETCH_JOKES_FAILED, payload: err.message });
      });
  };
};
