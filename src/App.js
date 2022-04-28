import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleBLog from "./Components/BLog/SingleBLog";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
          <Route exact path="/singleblog/:id">
            <SingleBLog />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
