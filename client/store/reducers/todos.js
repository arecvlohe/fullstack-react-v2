import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from "../types/todos";

export default function todos(state = [], { type, payload = null }) {
  switch (type) {
    case FETCH_TODOS_SUCCESS: {
      return state.concat(payload);
    }
    default: {
      return state;
    }
  }
}
