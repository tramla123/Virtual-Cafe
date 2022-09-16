import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import MediaNav from './components/MediaNav/MediaNav';
import SelectBackground from './components/Background/SelectBackground';
import Background from './components/Background/Background';
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


  return (
    <div className="App">
      <Header toggleLogIn={() => setShowLogInModal(!showLogInModal)} />
      
      {showSelectBackGround && <SelectBackground allBackgrounds={backgrounds}
        closeSelect={() => setSelectBackGround(!showSelectBackGround)} 
        setBackground={changeBackground}/>}
      
      {showLogInModal && <SignInModal toggleLogIn={ () => setShowLogInModal(!showLogInModal)}
      toggleSignIn={ () => setShowSignIn(!showSignIn)} checkSignInState={checkSignInState} />}
      
      <div className="grid-container">
        <div>
          <Timer/>
        </div>
        <Background background={background}/>
      </div>
      <MediaNav openSelect={() => setSelectBackGround(!showSelectBackGround)} showAdd={showSelectBackGround}/>
    </div>
  );
}

export default App;
