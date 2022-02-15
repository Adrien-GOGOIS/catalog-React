import React from "react";
import Movies from "./Movies";

import { Link } from "react-router-dom";

import movies from "../movies.json";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>HOME</h1>
        <ul>
          {movies.map((movie) => {
            return (
              <li>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
