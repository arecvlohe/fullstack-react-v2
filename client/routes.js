import React from "react";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

import Home from "./views/Home";
import AddTodo from "./views/AddTodo";
import EditTodo from "./views/EditTodo";

export default () =>
  <BrowserRouter>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/new" component={AddTodo} />
        <Route path="/:id" component={EditTodo} />
      </Switch>
    </main>
  </BrowserRouter>;
