import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Favorites extends Component{
  constructor() {
    super()
    this.state = {
      error: ''
    }
  }

  filterMovies = () => {
    let favoritesArray = [];
    this.props.favorites.forEach(favorite => {
       this.props.movies.forEach(movie => {
         if(movie.id === favorite) {
           favoritesArray.push(movie)
         }
      })
    })
    return favoritesArray
  }

  renderMovies = () => {
    const movies = this.filterMovies()
    if(movies.length === 0) {
      return <h2>You currently have no favorites saved.</h2>
    } else {
      return movies.map(movie => {
        return (
          <Movie  
            {...movie}
          />
        )
      })
    }
  }

  render() {
    return (
      <div className="movie-container">
        {this.renderMovies()}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies,
  favorites: state.favorites
})

export default connect(mapStateToProps)(Favorites)

Favorites.propTypes = {
  movies: propTypes.array.isRequired,
  favorites: propTypes.array.isRequired
}