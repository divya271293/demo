import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { store } from "./helpers";
import App from "./App";
import "./index.css";
import 'antd/dist/antd.css';

serviceWorker.unregister();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
