import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOutUser } from '../../actions';

export class SignOut extends Component {

   SignOut = () => {
    this.props.logOutUser();
  }

  render() {
    return (
      <button onClick={this.SignOut}>Log Out</button>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  logOutUser: (user) => dispatch(logOutUser())
})

export default connect(null, mapDispatchToProps)(SignOut);