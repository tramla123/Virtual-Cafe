import React from 'react'

const SignUp = () => {
  return (
    <form>
        <label for="username"> Enter Username: </label><br/>
        <input type="text" id="username" name="username"/><br/>
        <label for="password1"> Enter Password: </label><br/>
        <input type="text" id="password1" name="password1"/><br/>
        <label for="password2"> Re-Enter Password: </label><br/>
        <input type="text" id="password2" name="password2"/><br/>   
    </form>
  )
}

export default SignUp