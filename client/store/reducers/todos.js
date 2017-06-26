import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE
} from "../types/todos";

export default function todos(state = [], { type, payload = null }) {
  switch (type) {
    case FETCH_TODOS_SUCCESS: {
      return payload;
    }
    default: {
      return state;
    }
  }
}
