import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {

  render() {
    const { title, rating, posterImage, synopsis, releaseDate } = this.props
    const image = 'https://image.tmdb.org/t/p/w500'+ posterImage
    return (
      <div>
        <Link to={`/`} className='back-btn'>Back To All Movies</Link>
        {title}
        <img src={image} alt='movie poster'/>
        {rating}
        {releaseDate}
        {synopsis}
      </div>
    )
  }
}

export default MovieDetails
