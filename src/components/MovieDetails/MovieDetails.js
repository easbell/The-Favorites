import React, {Component} from 'react';
import './MovieDetails.scss'
import { Link } from 'react-router-dom';

class MovieDetails extends Component {

  render() {
    const { title, rating, posterImage, synopsis, releaseDate } = this.props
    console.log(this.props)
    const image = 'https://image.tmdb.org/t/p/w500'+ posterImage
    return (
      <div>
        <div className='movie-details'>
          <img src={image} alt='movie poster'/>
          <div className='movie-info'>
            <Link to={`/`}><button className='back-btn-fave'>Back To All</button></Link>
            <h2 className='sub-header'>{title}</h2>
            <h3>Rating: {rating}</h3>
            <h3>Release Date: {releaseDate}</h3>
            {synopsis}
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetails
