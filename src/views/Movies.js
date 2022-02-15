import React from "react";

import { Link } from "react-router-dom";

class Movies extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <p>Nom du film : {this.props.match.params.title}</p>
            <p>Réalisateur : {this.props.director}</p>
            <p>Acteurs : {this.props.stars}</p>
            <p>{this.props.image}</p>
            <p>Description : {this.props.description}</p>
          </li>
        </ul>
        <Link to="/">Back to Homepage</Link>
      </div>
    );
  }
}

export default Movies;
