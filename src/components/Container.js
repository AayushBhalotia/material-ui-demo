import React, { Suspense } from "react";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { LinearProgress, makeStyles } from "@material-ui/core";

const Counter = React.lazy(() => import("./Counter"));
const UserForm = React.lazy(() => import("./UserForm"));

const useStyles = makeStyles(() => ({
  root: {
    margin: "5rem",
  },
}));

function Container() {
  const classes = useStyles();
  return (
    <Router>
      <Suspense
        fallback={
          <LinearProgress classes={{ root: classes.root }} color="primary" />
        }
      >
        <Header />
        <Switch>
          <Route path="/Dashboard" exact component={Counter} />
          <Route path="/Account" exact component={UserForm} />
          <Route path="*">
            <Redirect to="/Dashboard" />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Container;
