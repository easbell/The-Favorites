import React, { Component } from 'react';

export class Movie extends Component {
  render() {
    const { title, rating, posterImage } = this.props
    return (
      <div>
        <h4>{title}</h4>
        <p>{rating}</p>
        <img src={posterImage} alt='movie poster'/>
      </div>
    )
  }
}

export default Movie
