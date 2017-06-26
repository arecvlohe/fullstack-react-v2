import React from "react";
import DOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import App from "./routes";

const render = Component => {
  DOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector("#root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./routes", () => {
    const App = require("./routes").default;
    render(App);
  });
}
