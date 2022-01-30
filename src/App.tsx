import React from "react";
import "./App.css";
import Landing from "./pages/landing/Landing";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path='/auth'>
            <Register/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
