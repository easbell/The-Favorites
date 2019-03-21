import React, { Component } from 'react';
import { fetchData } from '../utils/fetch';
import { cleanUsers } from '../utils/helpers';
import { verifyUser } from '../utils/verify';

export class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log('in submit', this.state)
    const url = 'http://localhost:3000/api/users'
    const fetchedUsers = await fetchData(url)
    console.log(fetchedUsers)
    const verifiedUser = verifyUser(fetchedUsers.data, this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.email}
            name='email'
            placeholder="Email"
            onChange={this.handleChange}
          />
          <input
            value={this.state.password}
            name='password'
            placeholder="Password"
            onChange={this.handleChange}
          />
          <button>Sign In</button>
        </form>
      </div>
    )
  }
}

export default SignIn
