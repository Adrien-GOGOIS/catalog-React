import React from "react";
import Movies from "./views/Movies.js";
import Home from "./views/Home.js";
import "./App.css";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/">Homepage</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies/:id" component={Movies} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
