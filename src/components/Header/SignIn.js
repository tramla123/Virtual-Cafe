import React from 'react'

const SignIn = () => {
  return (
    <form>
        <label for="username"> Username: </label><br/>
        <input type="text" id="username" name="username"/><br/>
        <label for="password"> Password: </label><br/>
        <input type="text" id="password" name="password"/>
   </form>
  )
}

export default SignIn