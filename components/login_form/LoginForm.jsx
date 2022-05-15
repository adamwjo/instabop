import React, { useState } from 'react'

 const LoginForm = () => {

  const [loginData, setLoginData ] = useState({
    email: "",
    password: ""
  })

  const handleChange = e => {
    setLoginData({[e.target.name]: e.target.value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(loginData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div><input type="email" name="email" placehoder="email" onChange={handleChange}/></div>
      <div><input type="password" name="password" placeholder="password" onChange={handleChange}/></div>
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm

      
      
    
      
    