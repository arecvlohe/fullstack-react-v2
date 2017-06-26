import React from "react";
import DOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";

import App from "./routes";
import store from "./store";

const render = Component => {
  DOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
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
