import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Button from "../../components/Button";
import List from "../../components/List";

export default function Home({ handleDelete, todos }) {
  return (
    <div>
      <List items={todos} handleDelete={handleDelete} />
      <br />
      <Button component={Link} to="/new" primary={true}>
        Add Todo
      </Button>
    </div>
  );
}
