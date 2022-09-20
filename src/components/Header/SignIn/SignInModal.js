import "../Header.css"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import { FaTimes } from 'react-icons/fa'

const SignInModal = ({ resetModal, toggleSignIn, checkSignInState, 
                        checkSuccess, setSuccess }) => {

  return (
    <div className="popup-login">
        <div>
          <FaTimes className="x-icon" onClick={resetModal} />
        </div>
        <ul className="popup-top">
          <li className="sign-in-header" 
             onClick={!checkSignInState() ? toggleSignIn : undefined}> 
             Sign In 
          </li>
          <li className="sign-in-header" 
            onClick={checkSignInState() ? toggleSignIn : undefined}> 
            Sign Up
          </li>
        </ul>
        {checkSignInState() && <SignIn checkSuccess={checkSuccess} setSuccess={setSuccess} 
          resetModal={resetModal}/>}
        {!checkSignInState() && <SignUp/> }

    </div>
  )
}

export default SignInModal