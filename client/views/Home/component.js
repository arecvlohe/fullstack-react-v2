import React from "react";
import { Link } from "react-router-dom";

export default function Home({ handleDelete, todos }) {
  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo, idx) => {
        return (
          <div key={todo._id + idx}>
            {todo.title}{" "}
            <Link to={`/${todo._id}`}>Edit</Link>{" "}
            <span onClick={() => handleDelete(todo._id)}>Delete</span>
          </div>
        );
      })}
      <br />
      <Link to="/new">Add Todo</Link>
    </div>
  );
}
