import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./screens/About";
import Dashboard from "./screens/Dashboard";
import Products from "./screens/Products";
const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
      <Route
        path="*"
        exact
        render={() => (
          <div>
            <h1>Page not found</h1>
          </div>
        )}
      />
    </Switch>
  );
};

export default Router;
