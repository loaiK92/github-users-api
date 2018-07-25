import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import App from "./App";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
