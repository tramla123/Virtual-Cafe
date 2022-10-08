import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import MediaNav from './components/MediaNav/MediaNav';
import SelectBackground from './components/Background/SelectBackground';
import Background from './components/Background/Background';
import SignInModal from './components/Header/SignIn/SignInModal';
import Tasks from './components/ToDoList/Tasks';
import SetTimeSetting from './components/Timer/SetTimeSetting';
import Timer from './components/Timer/Timer';
import Library from "./assets/images/library.jpeg";
import RainGIF from "./assets/images/raincafe.gif";
import StudyGIF1 from "./assets/images/pixel-study.gif";
import StudyGIF2 from "./assets/images/studying-guy.gif";
import StudyGIF3 from "./assets/images/student-studying.gif";


function App() {
  const [showSelectBackGround, setSelectBackGround] = useState (false)
  
  const [studyTime, setStudyTime] = useState(50)
  const [breakTime, setBreakTime] = useState(15) 
  const [timerSetting, toggleTimerSetting] = useState(false)
  const [startTimer, setStartTimer] = useState(false)

  const [tasks, setTasks] = useState([])

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

  const fetchTasks = () => {
    return JSON.parse(sessionStorage.getItem("tasks") || "[]")
  }


  const addTask = (task) => {
    let tasks = fetchTasks()
    console.log(tasks)
    const id = Math.floor(Math.random() * 10000) + 1
    tasks.push({
      id: id,
      task: task,
    })
    
    sessionStorage.setItem("tasks", JSON.stringify(tasks))
    setTasks(tasks)
  }
  const deleteTask = (task_id) => {
    let tasks = fetchTasks()
    tasks = tasks.filter((task) => task.id !== task_id)
    sessionStorage.setItem("tasks", JSON.stringify(tasks))
    setTasks(tasks)
  }

  useEffect(() => {
    setTasks(fetchTasks())
  }, []);


  return (
    <div className="App">
      <Header toggleTimerSetting={()=> toggleTimerSetting(!timerSetting)}
              openSelect={() => setSelectBackGround(!showSelectBackGround)}/>
      
      {showSelectBackGround && <SelectBackground allBackgrounds={backgrounds}
        closeSelect={() => setSelectBackGround(!showSelectBackGround)} 
        setBackground={changeBackground}/>}
      
      {timerSetting && <SetTimeSetting 
        toggleTimerSetting={()=> toggleTimerSetting(!timerSetting)}
        setStudyTime={setStudyTime} setBreakTime={setBreakTime}
        setStartTimer={() => setStartTimer(!startTimer)}/>}
    
      <div className="grid-container">
        <div className="timer-container">
          {!startTimer && <button 
            onClick={() => setStartTimer(!startTimer)} className="timer"
              style={{fontSize:'2rem', padding:'1rem', margin:'1rem 0rem' }}> 
            Start Timer </button>}
          {startTimer && <Timer initialStudy={studyTime} initialBreak={breakTime} />}
        </div>
        <div>
          <Tasks tasks={tasks} onDelete={deleteTask} addTask={addTask}></Tasks>
        </div>
        <Background background={background}/>
      </div>
      <MediaNav showAdd={showSelectBackGround}/>
    </div>
  );
}

export default App;

// const [showLogInModal, setShowLogInModal] = useState(false)
// const [showSignIn, setShowSignIn] = useState(true)
// const [successLogIn, setSucces] = useState(false)

// const checkSignInState = () => {
//   return showSignIn
// }

// const checkSuccessLogIn = () => {
//   return successLogIn
//   }

// const resetLogInModal = () => {
//   setShowLogInModal(!showLogInModal);
//   setShowSignIn(true);
// }

// {showLogInModal && !successLogIn && <SignInModal resetModal={resetLogInModal}
// toggleSignIn={ () => setShowSignIn(!showSignIn)} checkSignInState={checkSignInState}  
// checkSuccess={checkSuccessLogIn} setSuccess={ () => setSucces(!successLogIn)}/>}

