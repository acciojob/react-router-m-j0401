import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navigate from "./Navigate";

const App = () => {
  return (
    <Router>
      <div>
        <Navigate />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>

      </div>
    </Router>
  );
};

export default App;