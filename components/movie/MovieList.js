import React, { Component } from "react";
import MovieItem from "./MovieItem";

export class MovieList extends Component {
  render() {
    return this.props.movielist.map(item => (
      <div key={item.id}>
        <MovieItem movieItem={item} />
        <hr />
      </div>
    ));
  }
}

export default MovieList;
