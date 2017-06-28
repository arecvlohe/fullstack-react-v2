import React from "react";
import { Link } from "react-router-dom";

import Form from "../../components/Form";
import StyledLink from "../../components/Link";

export default function EditTodo({ title, handleUpdateForm, handleSubmit }) {
  return (
    <div>
      <StyledLink to="/" component={Link}>
        Back
      </StyledLink>
      <Form
        submitText="Edit Todo"
        handleSubmit={handleSubmit}
        inputs={[
          <input
            name="title"
            onChange={handleUpdateForm}
            type="text"
            value={title}
          />
        ]}
      />
    </div>
  );
}
