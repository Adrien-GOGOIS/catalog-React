import React from "react";
import Movies from "./Movies";

import { Link } from "react-router-dom";

import movies from "../movies.json";

class Home extends React.Component {
  render() {
    const data = movies.map((movie) => {
      return <Movies title={movie.title} />;
    });

    return (
      <div>
        <h1>HOME</h1>
        <Link>{data}</Link>
      </div>
    );
  }
}

export default Home;
