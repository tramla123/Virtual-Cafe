import React from 'react'
import { useState, useEffect } from 'react'
import './Timer.css'

const Timer = () => {

    const [studyTime, setStudyTime] = useState(true)
    const [minutes, setMinutes] = useState(50)
    const [seconds, setSeconds] = useState(0)
    
    var timer;
    useEffect(() => {

        timer = setInterval(() => {
            setSeconds(seconds-1)
            if(seconds === 0)
            {
                if(minutes === 0)
                {
                    if(studyTime)
                        setMinutes(14)
                    else 
                        setMinutes(49)
                    setSeconds(59)
                    setStudyTime(!studyTime)
                }
                else {
                    setMinutes(minutes-1)
                    setSeconds(59)
                }
            }
            
        }, 1000)
        return () =>clearInterval(timer)
    })

  return (
    <div className="timer-container">
        <h1 style={{paddingTop: '0.4rem'}}> {studyTime ? "Work Time:" : "Break Time:" } </h1>
        <h1 className="timer">
            {minutes >= 10 ? minutes : "0" + minutes}:
            {seconds >= 10 ? seconds : "0" + seconds}
        </h1>
    </div>
  )
}

export default Timer