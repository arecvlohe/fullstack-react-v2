import React from "react";
import DOM from "react-dom";
import { AppContainer } from "react-hot-loader";

const Root = () => <div>Hello, Suncoast!</div>;

const render = Component => {
  DOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector("#root")
  );
};

render(Root);

if (module.hot) {
  module.hot.accept(Root, () => {
    render(Root);
  });
}
