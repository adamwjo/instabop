import React from 'react'
class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div><input type="email" name="email" placehoder="email" onChange={this.handleChange}/></div>
        <div><input type="password" name="password" placeholder="password" onChange={this.handleChange}/></div>
        <button type="submit">Login</button>
      </form>
    )
  }
}

export default LoginForm
