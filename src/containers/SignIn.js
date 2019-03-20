import React, { Component } from 'react'

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

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('in submit', this.state)
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
