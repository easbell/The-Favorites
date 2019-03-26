import React, { Component } from 'react';
import { fetchData } from '../../utils/fetch';
import { cleanUsers, fetchAllFavorites } from '../../utils/helpers';
import { Link, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logInUser, addAllFavorites, addMessage } from '../../actions';

export class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      status: '',
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSignIn = async (e) => {
    const { addMessage } = this.props
    e.preventDefault();
    const url = 'http://localhost:3000/api/users'
    const userInput = this.state
    const userOptionObject = {
      method: "POST",
      body: JSON.stringify(userInput),
      headers: {
        "Content-Type": "application/json"
      }
    }
    const response = await fetchData(url, userOptionObject)
    if(response.status === 'success') {
      this.props.logInUser(response.data)
      const userFavorites = await fetchAllFavorites(response.data.id)
      this.props.addFavoritesToState(userFavorites)
      addMessage('Welcome Back.')
      setTimeout(() => {
        addMessage('')
      }, 3000)
    } 
    this.setState({ status: response.status })
  }
  
  render() {
    const { status } = this.state;
    return (
      <div className="login">
        <Link to={'/'} className='back-btn'>Back To Home</Link>
        <form onSubmit={this.handleSignIn} className="form">
          <h4>email:</h4>
          <input
            value={this.state.email}
            name='email'
            placeholder="Email"
            onChange={this.handleChange}
            className="input"
          />
          <h4>password</h4>
          <input
            value={this.state.password}
            name='password'
            placeholder="Password"
            onChange={this.handleChange}
            className="input"
          />
          {status === 'success' &&
            <Redirect to='/' />
          }
          {status === 500 &&
            <p>Sorry, we couldn't find your account, please sign up.</p>
          }
          <button>Sign In</button>
        </form>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  logInUser: (user) => dispatch(logInUser(user)),
  addFavoritesToState: (favorite) => dispatch(addAllFavorites(favorite)),
  addMessage: (message) => dispatch(addMessage(message))
})

export default connect(null, mapDispatchToProps)(SignIn)
