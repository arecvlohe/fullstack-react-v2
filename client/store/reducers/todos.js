import { FETCH_TODOS_SUCCESS, FETCH_TODO_SUCCESS } from "../types/todos";

export default function todos(
  state = { list: [], current: {} },
  { type, payload = null }
) {
  switch (type) {
    case FETCH_TODOS_SUCCESS: {
      return Object.assign({}, state, { list: payload });
    }
    case FETCH_TODO_SUCCESS: {
      return Object.assign({}, state, { current: payload });
    }
    default: {
      return state;
    }
  }
}
