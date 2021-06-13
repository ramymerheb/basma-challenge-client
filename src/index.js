import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import App from "./App";

import reportWebVitals from "./reportWebVitals";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";
import Thanks from "./Thanks";

function Routes() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/thanks" component={Thanks} exact />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <AppProvider i18n={enTranslations}>
      <Routes />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
