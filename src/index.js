import React from "react";
import * as ReactDOMClient from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import RouterManager from "router-manager";
import Providers from "providers";
import "./index.css";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <Providers>
      <RouterManager />
    </Providers>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
