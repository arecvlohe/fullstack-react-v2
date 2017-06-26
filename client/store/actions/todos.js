import axios from "axios";

import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE
} from "../types";

const API = "http://localhost:3000/api";

export const fetchTodos = () => dispatch => {
  dispatch({ type: FETCH_TODOS_REQUEST });
  axios
    .get(API)
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
    .post(API, {
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

export const deleteTodo = id => dispatch => {
  dispatch({ type: DELETE_TODO_REQUEST });
  return axios
    .delete(`${API}/${id}`)
    .then(({ data }) => {
      dispatch({ type: DELETE_TODO_SUCCESS });
      return data;
    })
    .catch(error => {
      dispatch({ type: DELETE_TODO_FAILURE });
    });
};
