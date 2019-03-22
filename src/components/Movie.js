import React from 'react';

const Movie = ({ title, rating, posterImage }) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>{rating}</p>
      <img src={posterImage} alt='movie poster'/>
    </div>
  )
}

export default Movie
