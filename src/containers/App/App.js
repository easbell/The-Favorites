import React, { Component } from 'react';
// import './App.css';
import { fetchData } from '../../utils/fetch'
import { key } from '../../utils/apiKEY';
import { cleanMovieData } from '../../utils/helpers';
import { connect } from 'react-redux';
import { addAllMovies, addAllShows } from '../../actions';
import MovieContainer from '../MovieContainer';
import ShowsContainer from '../ShowsContainer';
import MovieDetails from '../../components/MovieDetails'
import { NavLink, Route } from 'react-router-dom';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import SignOut from '../SignOut';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: ''
    }
  }

  componentDidMount = () => {
    this.fetchMovies()
    this.fetchTv();
  }

  
  fetchMovies = async () => {
    let movies = [];
    for(let i = 1; i <= 3; i++) {
      let url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&page=${i}`;
      let allMovies = await fetchData(url);
      console.log(allMovies)
      let cleanData = cleanMovieData(allMovies);
      cleanData.forEach(movie => {
        movies.push(movie)
      })
    }
    this.props.addAllMovies(movies);
  }

  fetchTv = async () => {
    const url = `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}`;
    const allShows = await fetchData(url);
    const cleanData = cleanMovieData(allShows);
    console.log(cleanData)
    this.props.addAllShows(cleanData);
  }

  render() {
    return (
      <div className="App">
        <header>
          <NavLink to='/login' className="nav">Log In</NavLink>
          <NavLink to='/signup' className="nav">Sign Up</NavLink>
          {/* <button onClick={this.fetchTv}>Show TV Shows</button> */}
          {
          this.props.user &&
            <div>
              <p>Welcome back!</p>
              <SignOut />
            </div>
          }
          <h1>MOVIE TRACKER</h1>
        </header>
        <h2 className="sub-header">Recommended Movies</h2>
        <Route exact path='/' component={MovieContainer} />
        <h2 className="sub-header">Recommended TV Shows</h2>
        <Route exact path='/' component={ShowsContainer} />
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
  addAllMovies: (movies) => dispatch(addAllMovies(movies)),
  addAllShows: (shows) => dispatch(addAllShows(shows))
})

const mapStateToProps = (state) => ({
  shows: state.shows,
  movies: state.movies,
  user: state.user.name
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
