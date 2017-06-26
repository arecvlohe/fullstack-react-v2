import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./reducers";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);
