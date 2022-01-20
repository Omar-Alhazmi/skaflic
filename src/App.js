import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Home from "./RoutingController";

function App() {
  return (
    <Router basename="/skaflic">
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
