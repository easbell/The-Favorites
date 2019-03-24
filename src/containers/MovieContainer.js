import React, { Component } from 'react';
import Movie from '../components/Movie';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MovieContainer extends Component {
  renderMovies = () => {
    return this.props.movies.map(movie => {
      return (
        <Link to={`/movies/${movie.id}`} key={movie.id} >
          <Movie  
            {...movie}
          />
          <button onClick={this.validateFavorite()}>Favorite</button>
        </Link>
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