import React, { Component } from 'react';
import { fetchData } from '../../utils/fetch'
import { key } from '../../utils/apiKEY';
import { cleanMovieData } from '../../utils/helpers';
import { connect } from 'react-redux';
import { addAllMovies, addAllShows } from '../../actions';
import MovieContainer from '../MovieContainer/MovieContainer';
import ShowsContainer from '../ShowsContainer/ShowsContainer';
import MovieDetails from '../../components/MovieDetails';
import Favorites from '../Favorites/favorites';
import { NavLink, Route } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import SignOut from '../SignOut/SignOut';
import propTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
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
    this.props.addAllShows(cleanData);
  }

  render() {
    const {message, user } = this.props
    return (
      <div className="App">
        <header>
        { !user &&
          <div>
            <NavLink to='/login' className="nav">Log In</NavLink>
            <NavLink to='/signup' className="nav">Sign Up</NavLink>
          </div>
        }
          {
            user &&
            <div>
              <SignOut />
              <NavLink to='/favorites' className="nav">Favorites</NavLink>
            </div>
          }
          <h1>MOVIE TRACKER</h1>
        </header>
        <p className='message'>{message}</p>
        <Route exact path="/" render={() => <h2 className="sub-header">Recommended Movies</h2>}/>
        <Route exact path='/' component={MovieContainer} />
        <Route exact path="/" render={() => <h2 className="sub-header">Recommended TV Shows</h2>}/>
        <Route exact path='/' component={ShowsContainer} />
        <Route exact path='/login' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/favorites' component={Favorites} />
        <Route path='/movies/:id' render={({ match }) => {
          const { id } = match.params
          const selectedMovie = this.props.movies.find(movie => {
            return movie.id == id
          })
          if(selectedMovie) {
            return <MovieDetails {...selectedMovie} />
          }
        }} />
        <Route path='/shows/:id' render={({ match }) => {
          const { id } = match.params
          const selectedMovie = this.props.shows.find(movie => {
            return movie.id == id
          })
          if(selectedMovie) {
            return <MovieDetails {...selectedMovie} />
          }
        }} />
      </div>
    )
  }
}


export const mapDispatchToProps = (dispatch) => ({
  addAllMovies: (movies) => dispatch(addAllMovies(movies)),
  addAllShows: (shows) => dispatch(addAllShows(shows))
})

const mapStateToProps = (state) => ({
  shows: state.shows,
  movies: state.movies,
  user: state.user.name,
  message: state.message
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  shows: propTypes.array.isRequired,
  movies: propTypes.array.isRequired,
  user: propTypes.string,
  message: propTypes.string,
  addAllMovies: propTypes.func.isRequired,
  addAllShows: propTypes.func.isRequired
}
