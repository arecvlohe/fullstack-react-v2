import React from "react";
import { Link } from "react-router-dom";

export default function AddTodo({ handleUpdateForm, handleSubmit, title }) {
  return (
    <div>
      <Link to="/">Back</Link>
      <h1>Add Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          onChange={handleUpdateForm}
          type="text"
          value={title}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
