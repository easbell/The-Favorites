import React, { Component } from 'react';
import Movie from '../components/Movie';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ShowsContainer extends Component{
  renderShows = () => {
    return this.props.shows.map(show => {
      return (
        <Link to={`/shows/${show.id}`} key={show.id} >
          <Movie  
            {...show}
          />
        </Link>
      )
    })
  }

  render() {
    return (
      <div className="shows-container">
        {this.renderShows()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  shows: state.shows
})

export default connect(mapStateToProps)(ShowsContainer)