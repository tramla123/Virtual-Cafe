import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import MediaNav from './components/MediaNav';
import Background from './components/Background/Background';
import Library from "./assets/images/library.jpeg";
import RainGIF from "./assets/images/raincafe.gif";
import StudyGIF1 from "./assets/images/pixel-study.gif";
import StudyGIF2 from "./assets/images/studying-guy.gif";
import StudyGIF3 from "./assets/images/student-studying.gif";
import SelectBackground from './components/Background/SelectBackground';


function App() {

  const [showSelectBackGround, setSelectBackGround] = useState (true)

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
      id: 2,
      description: "Drawing of Library",
      path: Library
    })

  const changeBackground = (item) => {
    setBackground(item)
  }

  return (
    <div className="App">
      <Header />
      {showSelectBackGround && <SelectBackground allBackgrounds={backgrounds}
        closeSelect={() => setSelectBackGround(!showSelectBackGround)} 
        setBackground={changeBackground}/>}
      <Background background={background}/>
      <MediaNav openSelect={() => setSelectBackGround(!showSelectBackGround)} showAdd={showSelectBackGround}/>
    </div>
  );
}

export default App;
