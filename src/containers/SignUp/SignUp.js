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
      <div>
        <Link to={'/'} className='back-btn'>Back To Home</Link>
        <form onSubmit={this.handleSignIn}>
        <input
            value={this.state.name}
            name='name'
            placeholder="your name"
            onChange={this.handleChange}
          />
          <input
            value={this.state.email}
            name='email'
            placeholder="Email"
            onChange={this.handleChange}
          />
          <input
            value={this.state.password}
            type='password'
            name='password'
            placeholder="Password"
            onChange={this.handleChange}
          />
          <button onClick={this.handleAddUser}>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignUp;