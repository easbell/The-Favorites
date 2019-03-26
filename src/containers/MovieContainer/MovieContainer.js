import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import { connect } from 'react-redux';

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

export const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(MovieContainer)