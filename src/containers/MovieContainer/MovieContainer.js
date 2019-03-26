import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import propTypes from 'prop-types';

class MovieContainer extends Component {
  renderMovies = () => {
    return this.props.movies.map(movie => {
      return (
        <Movie key={movie.id}
          type='movies' 
          {...movie}
          />
      )
    })
  }

  render() {
    return (
      <div className="movie-container">
        {this.renderMovies()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(MovieContainer)

MovieContainer.propTypes = {
  movies: propTypes.array.isRequired
}