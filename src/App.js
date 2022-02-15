import React from "react";
import Movies from "./views/Movies.js";
import "./App.css";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div></div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/movies/:name" component={Movies} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
