import React, { Component } from 'react';
import {fetchData } from '../utils/fetch'

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

  handleSignIn = async (e) => {
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
    console.log(response)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSignIn}>
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
