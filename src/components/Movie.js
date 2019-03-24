import React, {Component} from 'react';
import { fetchData } from '../utils/fetch';
import { addFavorites } from '../actions';
import { connect } from 'react-redux';

export class Movie extends Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
  }

  validateFavorite = async () => {
    const { user_id, id } = this.props
    const url = `http://localhost:3000/api/users/${user_id}/favorites`      
    if(user_id) {
      const allFavorites = await fetchData(url)
      allFavorites.data.forEach(favorite => {
        if(favorite.movie_id === id) {
          console.log('alreay in favorites')
        } else {
          this.addFavorite()
        }
      })
    } else {
      this.setState()
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
      await fetchData(url, {
        method: "POST", 
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json"
        }
      })
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
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user_id: state.user.id
})

export default connect(mapStateToProps)(Movie)
