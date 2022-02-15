import React from "react";

class Movies extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <p>{this.props.title}</p>
            <p>{this.props.director}</p>
            <p>{this.props.stars}</p>
            <p>{this.props.image}</p>
            <p>{this.props.description}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Movies;
