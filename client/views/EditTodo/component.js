import React from "react";
import { Link } from "react-router-dom";

export default function EditTodo({ title, handleUpdateForm, handleSubmit }) {
  return (
    <div>
      <Link to="/">Back</Link>
      <h1>Edit Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          onChange={handleUpdateForm}
          type="text"
          value={title}
        />
        <button type="submit">Edit Todo</button>
      </form>
    </div>
  );
}
