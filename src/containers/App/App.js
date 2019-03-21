import React, { Component } from 'react';
import './App.css';
import { fetchData } from '../../utils/fetch'
import { key } from '../../utils/apiKEY';
import { cleanMovieData } from '../../utils/helpers';
import { connect } from 'react-redux';
import { addAllMovies } from '../../actions';
import MovieContainer from '../MovieContainer';
import MovieDetails from '../../components/MovieDetails'
import { NavLink, Route } from 'react-router-dom';
import SignIn from '../SignIn';
import SignUp from '../SignUp'
import SignOut from '../SignOut'

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: ''
    }
  }

  componentDidMount = () => {
    this.fetchMovies()
  }
  
  fetchMovies = async () => {
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`;
    const allMovies = await fetchData(url);
    const cleanData = cleanMovieData(allMovies);
    this.props.addAllMovies(cleanData);
  }

  render() {
    return (
      <div className="App">
        <header>
          <NavLink to='/login' className="nav">Log In</NavLink>
          <NavLink to='/signup' className="nav">Sign Up</NavLink>
          {
          this.props.user &&
            <div>
              <p>Welcome back!</p>
              <SignOut />
            </div>
          }
          <h1>Movie Tracker</h1>
        </header>
        <Route exact path='/' component={MovieContainer} />
        <Route exact path='/login' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route path='/movies/:id' render={({ match }) => {
          const { id } = match.params
          const selectedMovie = this.props.movies.find(movie => {
            return movie.id == id
          })
          if(selectedMovie) {
            return <MovieDetails {...selectedMovie} />
          }
        }} />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addAllMovies: (movies) => dispatch(addAllMovies(movies))
})

const mapStateToProps = (state) => ({
  movies: state.movies,
  user: state.user.name
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
