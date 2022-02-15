import React from "react";
import Movies from "./views/Movies.js";
import "./App.css";

import movies from "./films.json";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

const data = movies.map((movie) => {
  return <Movies title={movie.title} />;
});

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/* {data} */}
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/movies/:name" component={Movies} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
