import React, { Component } from 'react';
import { fetchData } from '../../utils/fetch';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addMessage } from '../../actions'

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      status: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }
  
  handleAddUser = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:3000/api/users/new'
    try {
      fetchData(url, {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      this.setState({ status: 'success' })
      this.props.addMessage('Success! Please sign in.')
      setTimeout(() => {
        this.props.addMessage('')
      }, 3000)
    } catch(error) {
      this.props.addMessage('Sorry, something went wrong.')
      setTimeout(() => {
        this.props.addMessage('')
      }, 3000)
    }
  }

  render() {
    const { status } = this.state
    return (
      <div className="logout">
        <form onSubmit={this.handleSignIn} className="form">
        <Link to={'/'} className='back-btn'>Back To Home</Link>
        <input
            value={this.state.name}
            name='name'
            placeholder="Your Name"
            onChange={this.handleChange}
            className="input"
          />
          <input
            value={this.state.email}
            name='email'
            placeholder="Email"
            onChange={this.handleChange}
            className="input"
          />
          <input
            value={this.state.password}
            type='password'
            name='password'
            placeholder="Password"
            onChange={this.handleChange}
            className="input"
          />
          {status === 'success' &&
            <Redirect to='/' />
          }
          <button onClick={this.handleAddUser} className="sign-up-btn">Sign Up</button>
        </form>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addMessage: (message) => dispatch(addMessage(message))
})

export default connect(null, mapDispatchToProps)(SignUp);