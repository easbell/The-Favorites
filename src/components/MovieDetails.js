import React, { Component } from 'react'

const MovieDetails = ({ title, rating, synopsis, releaseDate, posterImage }) => {
  return (
    <div>
      {title}
      <img src={posterImage} alt='movie poster'/>
      {rating}
      {releaseDate}
      {synopsis}
    </div>
  )
}

export default MovieDetails
