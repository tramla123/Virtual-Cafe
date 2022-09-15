import {useState} from 'react'

const SignUp = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, toggleShowPassword] = useState(false)
  const [showRePassword, toggleReShowPassword] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if(!username && !password)
      alert("Please enter a valid username and password")
    else if(!username)
      alert("Please enter a valid username")
    else if(!password)
      alert("Please enter a valid password")
    // checkUser({username, password})
    else{
      setUsername('')
      setPassword('')
      toggleShowPassword(false)
    }
  }

  return (
    <form>
        <div>
          <label htmlFor="username"> Enter Username: </label><br/>
          <input type="text" id="username" name="username" className='input-box' /><br/>
        </div>
        <div className='password-outter'>
          <label htmlFor="password1"> Enter Password: </label><br/>
          <input type={showPassword ? "password" : "text"}  
            id="password1" name="password1" className='input-box'/><br/>
          <button 
              className="show-hide"
              onClick={ (e) => {toggleShowPassword(!showPassword); e.preventDefault() }}>
              {showPassword ? "SHOW" : "HIDE"}
          </button>
        </div>
        <div>
          <label htmlFor="password2"> Re-Enter Password: </label><br/>
          <input type={showRePassword ? "password" : "text"}  
            id="password2" name="password2" className='input-box'/><br/>
          <button 
              className="show-hide"
              onClick={ (e) => {toggleReShowPassword(!showRePassword); e.preventDefault() }}>
              {showRePassword ? "SHOW" : "HIDE"}
          </button>
        </div>
        <input onClick={(e) => e.preventDefault()} type="submit" value="Sign Up"/>
    </form>
  )
}

export default SignUp