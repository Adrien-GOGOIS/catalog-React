import React from "react";

class Movies extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <p>{this.props.director}</p>
        <p>{this.props.stars}</p>
        <p>{this.props.image}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Movies;
