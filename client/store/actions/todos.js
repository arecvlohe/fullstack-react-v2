import axios from "axios";

import * as types from "../types";

const API = "http://localhost:3000/api";

export const fetchTodos = () => dispatch => {
  dispatch({ type: types.FETCH_TODOS_REQUEST });
  axios
    .get(API)
    .then(({ data }) => {
      dispatch({ type: types.FETCH_TODOS_SUCCESS, payload: data.todos });
    })
    .catch(e => {
      dispatch({ type: types.FETCH_TODOS_FAILURE });
    });
};

export const addTodo = ({ title, completed = false }) => dispatch => {
  dispatch({ type: types.ADD_TODO_REQUEST });
  return axios
    .post(API, {
      title,
      completed
    })
    .then(({ data }) => {
      dispatch({ type: types.ADD_TODO_SUCCESS });
      return data;
    })
    .catch(error => {
      dispatch({ type: types.ADD_TODO_FAILURE });
    });
};

export const deleteTodo = id => dispatch => {
  dispatch({ type: types.DELETE_TODO_REQUEST });
  return axios
    .delete(`${API}/${id}`)
    .then(({ data }) => {
      dispatch({ type: types.DELETE_TODO_SUCCESS });
      return data;
    })
    .catch(error => {
      dispatch({ type: types.DELETE_TODO_FAILURE });
    });
};

export const fetchTodo = id => dispatch => {
  dispatch({ type: types.FETCH_TODO_REQUEST });
  axios
    .get(`${API}/${id}`)
    .then(({ data }) => {
      dispatch({ type: types.FETCH_TODO_SUCCESS, payload: data.todo });
    })
    .catch(error => {
      dispatch({ type: types.FETCH_TODO_FAILURE });
    });
};

export const editTodo = ({ id, title, completed }) => dispatch => {
  dispatch({ type: types.EDIT_TODO_REQUEST });
  return axios
    .put(`${API}/${id}`, {
      title,
      completed
    })
    .then(({ data }) => {
      dispatch({ type: types.EDIT_TODO_SUCCESS });
      return data;
    })
    .catch(error => {
      dispatch({ type: types.EDIT_TODO_FAILURE });
    });
};
