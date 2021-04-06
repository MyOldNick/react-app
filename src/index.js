//React
import React from "react";
import ReactDOM from "react-dom";
//redux
import { Provider } from "react-redux";
import store from "./store";
//components
import App from "./App.js";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
