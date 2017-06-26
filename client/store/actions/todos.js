import axios from "axios";

import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE
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

export const addTodo = ({ title, completed = false }) => dispatch => {
  dispatch({ type: ADD_TODO_REQUEST });
  return axios
    .post("http://localhost:3000/api", {
      title,
      completed
    })
    .then(({ data }) => {
      dispatch({ type: ADD_TODO_SUCCESS });
      return data;
    })
    .catch(error => {
      dispatch({ type: ADD_TODO_FAILURE });
    });
};
