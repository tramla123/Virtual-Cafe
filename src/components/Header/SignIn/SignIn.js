import { useState } from 'react'
import axios from "axios";

const SignIn = ( { checkUser } ) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, toggleShowPassword] = useState(false)
  
  const onSubmit = (e) => {
    e.preventDefault()
    setUsername('')
    setPassword('')
    toggleShowPassword(false)
  }

  return (
    <form onSubmit={onSubmit}>
        <div className="input-item">
          <label htmlFor="username" className="input-title"> Username: </label><br/>
          <input type="text" id="username" name="username" className='input-box'
            onChange={(e) => setUsername(e.target.value)}/><br/>
        </div>
        <div className="input-item">
          <label htmlFor="password" className="input-title"> Password: </label><br/>
          <div className='password-outter'>
            <input type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)}
              id="password" name="password" className='input-box'/><br/>
            <button 
              className="show-hide"
              onClick={ () => toggleShowPassword(!showPassword)}>
              {showPassword ? "HIDE" : "SHOW"}
            </button>
          </div>
        </div>
        <input type="submit" value="Sign In"/>
   </form>
  )
}

export default SignIn