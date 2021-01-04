import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route
        exact
        path="/github"
        render={() =>
          (window.location = "https://github.com/abigailarruda/pomodoro")
        }
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
