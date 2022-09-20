import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import MediaNav from './components/MediaNav/MediaNav';
import SelectBackground from './components/Background/SelectBackground';
import Background from './components/Background/Background';
import Snacks from './components/Snacks/Snacks';
import SignInModal from './components/Header/SignIn/SignInModal';
import Timer from './components/Timer/Timer';
import Library from "./assets/images/library.jpeg";
import RainGIF from "./assets/images/raincafe.gif";
import StudyGIF1 from "./assets/images/pixel-study.gif";
import StudyGIF2 from "./assets/images/studying-guy.gif";
import StudyGIF3 from "./assets/images/student-studying.gif";


function App() {

  const [showSelectBackGround, setSelectBackGround] = useState (false)
  const [showLogInModal, setShowLogInModal] = useState(false)
  const [showSignIn, setShowSignIn] = useState(true)
  const [successLogIn, setSucces] = useState(false)
  const [startTimer, setStartTimer] = useState(false)

  const backgrounds = [
    {
      id: 1,
      description: "GIF of raining day",
      path: RainGIF
    },
    {
      id: 2,
      description: "Drawing of Library",
      path: Library
    },
    {
      id: 3,
      description: "Student studying GIF",
      path: StudyGIF1
    },
    {
      id: 4,
      description: "Student studying GIF",
      path: StudyGIF2
    },
    {
      id: 5,
      description: "Student studying GIF",
      path: StudyGIF3
    }  
  ]
  const [background, setBackground] = useState(
    {
      id: 3,
      description: "Student studying GIF",
      path: StudyGIF1
    })

  const changeBackground = (item) => {
    setBackground(item)
  }

  const checkSignInState = () => {
    return showSignIn
  }

  const checkSuccessLogIn = () => {
    return successLogIn
    }
  
  let resetLogInModal = () => {
    setShowLogInModal(!showLogInModal);
    setShowSignIn(true);
  }

  console.log(successLogIn)
  return (
    <div className="App">
      <Header toggleLogIn={() => setShowLogInModal(!showLogInModal)} />
      
      {showSelectBackGround && <SelectBackground allBackgrounds={backgrounds}
        closeSelect={() => setSelectBackGround(!showSelectBackGround)} 
        setBackground={changeBackground}/>}
      
      {showLogInModal && !successLogIn && <SignInModal resetModal={resetLogInModal}
      toggleSignIn={ () => setShowSignIn(!showSignIn)} checkSignInState={checkSignInState}  
      checkSuccess={checkSuccessLogIn} setSuccess={ () => setSucces(!successLogIn)}/>}
      
      <div className="grid-container">
          <div>
            {!startTimer && <button 
              onClick={() => setStartTimer(!startTimer)} className="time-container timer"
                style={{fontSize:'2rem', padding:'1rem', marginTop:'3rem' }}> 
              Start Timer </button>}
            {startTimer && <Timer/>}
          </div>
          <div>
            <Snacks/>
          </div>
        <Background background={background}/>
      </div>
      <MediaNav openSelect={() => setSelectBackGround(!showSelectBackGround)} showAdd={showSelectBackGround}/>
    </div>
  );
}

export default App;
