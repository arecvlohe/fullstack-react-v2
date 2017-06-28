import React from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Button";
import Form from "../../components/Form";
import StyledLink from "../../components/Link";

export default function AddTodo({ handleUpdateForm, handleSubmit, ...props }) {
  return (
    <div>
      <StyledLink to="/" component={Link}>
        Back
      </StyledLink>
      <Form
        submitText="Add Todo"
        handleSubmit={handleSubmit}
        inputs={[
          <input
            name="title"
            onChange={handleUpdateForm}
            placeholder="ex. Buy groceries"
            type="text"
            value={props[this.name]}
          />
        ]}
      />
    </div>
  );
}
