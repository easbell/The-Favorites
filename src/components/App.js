import React, { Component } from 'react';
import '../styles/App.css';
import { fetchData } from '../utils/fetch'

class App extends Component {
  componentDidMount = () => {
    this.fetchMovies()
  }
  
  fetchMovies = async () => {
    const url = `https://api.themoviedb.org/`
    const allMovies = await fetchData(url)
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Movie Tracker</h1>
        </header>
      </div>
    );
  }
}

export default App;
