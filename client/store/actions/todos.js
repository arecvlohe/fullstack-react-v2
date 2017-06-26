import axios from "axios";

import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from "../types";

export const fetchTodos = () => dispatch => {
  dispatch({ type: FETCH_TODOS_REQUEST });
  axios
    .get("http://localhost:3000/api")
    .then(({ data }) => {
      dispatch({ type: FETCH_TODOS_SUCCESS, payload: data.todos });
    })
    .catch(e => {
      dispatch({ type: FETCH_TODOS_FAILURE });
    });
};
