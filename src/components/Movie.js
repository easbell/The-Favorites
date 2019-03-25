import React, {Component} from 'react';
import { fetchData } from '../utils/fetch';
import { addFavorite } from '../actions';
import { connect } from 'react-redux';

export class Movie extends Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
  }

  validateFavorite = () => {
    const { user_id, id } = this.props  
    if(user_id) {
      if(this.props.favorites.includes(id)) {
        console.log('favorite already exists')
      } else {
        this.addFavorite()
      }
    } else {
      console.log('log in')
    }
  }

  addFavorite = async (e) => {
    const { id, title, rating, user_id, posterImage, synopsis, releaseDate } = this.props
    const url = "http://localhost:3000/api/users/favorites/new"
    const movie = {
      movie_id: id, 
      user_id: user_id, 
      title: title, 
      poster_path: posterImage, 
      release_date: releaseDate, 
      vote_average: rating, 
      overview: synopsis
    }
    try {
      const addedFavorite = await fetchData(url, {
        method: "POST", 
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json"
        }
      })
      this.props.addFavoriteToState(id)
    } catch(error) {
      console.log(error.message)
    }
  }

  render() {
    const { title, rating, posterImage, synopsis } = this.props
    const image = 'https://image.tmdb.org/t/p/w500'+ posterImage
    return (
      <div className="movie">
        <div className="movie-info">
        {title}
        {rating}
        {synopsis}
        </div>
        {/* <h4 className="movie-title">{title}</h4> */}
        {/* <p classsName="rating">{rating}</p> */}
        <img src={image} alt='movie poster'/> 
        {/* <img src='../utils/assets/not-favorite.png' alt='favorite-icon'/> */}
        <button className='favorite' onClick={this.validateFavorite}>Favorite</button>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user_id: state.user.id,
  favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
  addFavoriteToState: (favorite) => dispatch(addFavorite(favorite))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
