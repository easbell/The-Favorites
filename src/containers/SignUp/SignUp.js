import React, { Component } from 'react';
import { fetchData } from '../../utils/fetch';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }
  
  handleAddUser = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:3000/api/users/new#'
    fetchData(url, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  render() {
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
          <button onClick={this.handleAddUser} className="sign-up-btn">Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignUp;