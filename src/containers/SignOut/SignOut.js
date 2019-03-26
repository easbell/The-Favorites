import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOutUser } from '../../actions';
import propTypes from 'prop-types';

export class SignOut extends Component {

   SignOut = () => {
    this.props.logOutUser();
  }

  render() {
    return (
      <button onClick={this.SignOut} className="sign-out-btn">Log Out</button>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  logOutUser: (user) => dispatch(logOutUser())
})

export default connect(null, mapDispatchToProps)(SignOut);

SignOut.propTypes ={
  logOutUser: propTypes.func.isRequired
}