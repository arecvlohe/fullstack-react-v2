import React from "react";

export default function Home({ todos }) {
  return (
    <div>
      {todos.map(todo => {
        return <div key={todo._id}>{todo.title}</div>;
      })}
    </div>
  );
}
