import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetails = ({ title, rating, synopsis, releaseDate, posterImage }) => {
  return (
    <div>
      <Link to={`/`} className='back-btn'>Back To All Movies</Link>
      {title}
      <img src={posterImage} alt='movie poster'/>
      {rating}
      {releaseDate}
      {synopsis}
    </div>
  )
}

export default MovieDetails
