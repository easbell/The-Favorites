import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ShowsContainer extends Component{
  renderShows = () => {
    return this.props.shows.map(show => {
      console.log(show)
      return (
        <Movie type='shows' 
          {...show}
        />
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