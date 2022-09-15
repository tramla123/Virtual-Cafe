import { useState } from 'react'
import axios from "axios";

const SignIn = ( { checkUser } ) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, toggleShowPassword] = useState(false)
  
  const onSubmit = (e) => {
    e.preventDefault()
    if(!username && !password)
      alert("Please enter a valid username and password")
    else if(!username)
      alert("Please enter a valid username")
    else if(!password)
      alert("Please enter a valid password")
    // checkUser({username, password})
    else {
      setUsername('')
      setPassword('')
      toggleShowPassword(false)
    }
  }

  return (
    <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="username"> Username: </label><br/>
          <input type="text" id="username" name="username" className='input-box'
            onChange={(e) => setUsername(e.target.value)}/><br/>
        </div>
        <div>
          <label htmlFor="password"> Password: </label><br/>
          <div className='password-outter'>
            <input type={showPassword ? "password" : "text"} onChange={(e) => setPassword(e.target.value)}
              id="password" name="password" className='input-box'/><br/>
            <button 
              className="show-hide"
              onClick={ (e) => toggleShowPassword(!showPassword)}>
              {showPassword ? "SHOW" : "HIDE"}
            </button>
          </div>
        </div>
        <input type="submit" value="Sign In"/>
   </form>
  )
}

export default SignIn