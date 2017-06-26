import { createSelector } from "reselect";

const todos = state => state.todos;
export const getTodos = createSelector(todos, todos => todos);
