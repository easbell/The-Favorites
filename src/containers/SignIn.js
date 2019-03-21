import React, { Component } from 'react';
import { fetchData } from '../utils/fetch';
import { cleanUsers } from '../utils/helpers';
// import { verifyUser } from '../utils/verify';

export class SignIn extends Component {
  constructor() {
    super()
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
    console.log('in submit', this.state)
    // const newUser = this.state;
    const url = 'http://localhost:3000/api/users/new#'
    const newUser = await fetchData(url, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(newUser)
    // const verifyResponse = verifyUser(fetchedUsers.data, this.state)
    // console.log(verifyResponse)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
            name='password'
            placeholder="Password"
            onChange={this.handleChange}
          />
          <button>Sign In</button>
          <button onClick={this.handleAddUser}>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignIn
