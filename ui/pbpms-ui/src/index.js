import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//Uikit import
import "uikit/dist/css/uikit.min.css";
import UIkit from "uikit/dist/js/uikit";
import Icons from "uikit/dist/js/uikit-icons";
//IE compitability
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import store from "./store";

import { Provider } from "react-redux";

UIkit.use(Icons);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
