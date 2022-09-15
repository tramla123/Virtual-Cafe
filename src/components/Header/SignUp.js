import {useState} from 'react'
import axios from "axios";

const SignUp = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, toggleShowPassword] = useState(false)

  const addUser = async (e) =>  {
    e.preventDefault()
    console.log(username)
    await axios.post('http://localhost:8080/users',{
      username: username,
      password: password
    })
    setUsername('')
    setPassword('')
    toggleShowPassword(false)

  }

  return (
    <form onSubmit={addUser}>
        <div>
          <label htmlFor="username"> Enter Username: </label><br/>
          <input type="text" id="username" name="username" className='input-box'
            onChange={(e) => setUsername(e.target.value)} /><br/>
        </div>
        <div className='password-outter'>
          <label htmlFor="password1"> Enter Password: </label><br/>
          {/* <input type={showPassword ? "password" : "text"}  
            id="password" name="password" className='input-box'/><br/>
          <button 
              className="show-hide"
              onClick={ (e) => {toggleShowPassword(!showPassword); e.preventDefault() }}>
              {showPassword ? "SHOW" : "HIDE"}
          </button> */}
          <input type="password" id="password1" name="password1" className='input-box'
            onChange={(e) => setPassword(e.target.value)}/><br/>
        </div>
        <input type="submit" value="Sign Up"/>
    </form>
  )
}

export default SignUp