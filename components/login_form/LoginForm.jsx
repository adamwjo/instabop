import React from 'react'
class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

<<<<<<< HEAD
export default function LoginForm() {
  return (
    <div className="form">LoginForm</div>
  )
=======
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
>>>>>>> 4458dc36d4b24589ef4088b6f99e6010a4856487
}

export default LoginForm
