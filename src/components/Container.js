import React from "react";
import Counter from "./Counter";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserForm from "./UserForm";

function Container() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/Dashboard" exact component={Counter} />
          <Route path="/Account" exact component={UserForm} />
          <Route path="*">
          <Redirect to="/Dashboard"/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Container;
