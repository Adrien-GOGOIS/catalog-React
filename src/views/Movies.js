import React from "react";

import { Link } from "react-router-dom";

import movies from "../movies.json";

class Movies extends React.Component {
  render() {
    const movieID = this.props.match.params.id;
    const data = movies[movieID - 1];
    return (
      <div>
        <ul>
          <li>
            <p>Nom du film : {data.title}</p>
            <p>Réalisateur : {data.director}</p>
            <p>Acteurs : {data.stars}</p>
            <img src={data.image} alt="Image du film" />
            <p>Description : {data.description}</p>
          </li>
        </ul>
        <Link to="/">Back to Homepage</Link>
      </div>
    );
  }
}

export default Movies;
