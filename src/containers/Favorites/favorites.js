import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Favorites extends Component{
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
    return this.renderMovies(favoritesArray)
  }

  renderMovies = (movies) => {
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
      <div>
        <Link to={`/`}><button className='back-btn-fave'>Back To Movies</button></Link>
        <div className="favorites-container">
          {this.filterMovies()}
        </div>
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