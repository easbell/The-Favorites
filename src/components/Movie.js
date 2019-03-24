import React, { Component } from 'react';

export class Movie extends Component {
  render() {
    const { title, rating, posterImage } = this.props
    return (
      <div className="movie">
        {/* <h4 className="movie-title">{title}</h4> */}
        {/* <p classsName="rating">{rating}</p> */}
        <img src={posterImage} alt='movie poster'/>
      </div>
    )
  }
}

export default Movie
