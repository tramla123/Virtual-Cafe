import { useState, useRef, useEffect } from 'react'
import axios from "axios";

const SignIn = ( {checkSuccess, setSuccess, resetModal} ) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  
  const errRef = useRef();

  useEffect(() => {
    setErrorMsg('')
  }, [username, password])

  const onSubmit = async (e) => {
    e.preventDefault()
    setUsername('')
    setPassword('')
  }
  return (
    <>
        <form onSubmit={onSubmit}>
          <div className="input-item">
            <label htmlFor="username" className="input-title"> Username: </label><br/>
            <input 
              type="text" id="username" name="username" autoComplete="off" 
              className='input-box' value={username} required 
              onChange={(e) => setUsername(e.target.value)}/><br/>
          </div>
          <div className="input-item">
            <label htmlFor="password" className="input-title"> Password: </label><br/>
            <input 
              type="password" onChange={(e) => setPassword(e.target.value)} required
              id="password" name="password" className='input-box' value={password}/><br/>
          </div>
          {errorMsg !== "" && <p ref={errRef} aria-live="assertive">{errorMsg}</p>}
          <input type="submit" value="Sign In"/>
      </form>
  
    </>
  )
}

export default SignIn