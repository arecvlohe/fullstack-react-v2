import React from "react";
import { Link } from "react-router-dom";

export default function Home({ todos }) {
  return (
    <div>
      {todos.map((todo, idx) => {
        return <div key={todo._id + idx}>{todo.title}</div>;
      })}
      <Link to="/new">Add Todo</Link>
    </div>
  );
}
