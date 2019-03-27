import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

export class ShowsContainer extends Component{
  renderShows = () => {
    return this.props.shows.map(show => {
      return (
        <Movie type='shows' key={show.id}
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

export const mapStateToProps = (state) => ({
  shows: state.shows
})

export default connect(mapStateToProps)(ShowsContainer)

ShowsContainer.propTypes = {
  shows: propTypes.array.isRequired
}