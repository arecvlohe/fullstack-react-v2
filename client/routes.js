import React from "react";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

import Home from "./views/Home";

export default () =>
  <BrowserRouter>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </main>
  </BrowserRouter>;
