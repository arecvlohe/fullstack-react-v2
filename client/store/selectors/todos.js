import { createSelector } from "reselect";

const todos = state => state.todos.list;
export const getTodos = createSelector(todos, todos => todos);

const todo = state => state.todos.current;
export const getTodo = createSelector(todo, todo => todo);
