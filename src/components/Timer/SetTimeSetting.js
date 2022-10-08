import { useState } from "react"
import { FaTimes } from 'react-icons/fa'

const SetTimeSetting = ( { toggleTimerSetting, setStudyTime, setBreakTime, setStartTimer } ) => {

    const [studyTime, setStudy] = useState(0)
    const [breakTime, setBreak] = useState(0) 

    const setTimer = (e) => {
        e.preventDefault()
        setStudyTime(studyTime)
        setBreakTime(breakTime)
        setStartTimer()
        setStudy(0)
        setBreak(0)
    }
  return (
    <div className="modal">
            <div className="modal-content">
                <form onSubmit={setTimer}>
                    <div className="modal-top">
                        <FaTimes className="x-icon" onClick={toggleTimerSetting}/>
                        <h2>Timer Setting</h2>
                    </div>
                    <div style={{padding:"1rem"}}>
                        <label htmlFor="study"> Work Time (Minutes) </label><br/>
                        <input type="number" id="study" name="study" required 
                        onChange={(e) => setStudy(e.target.value)}/>
                    </div>
                    <div style={{paddingBottom:"1rem"}}>
                        <label style={{paddingBottom:"0.2rem"}} htmlFor="break"> Break Time (Minutes) </label><br/>
                        <input type="number" id="break" name="break" required 
                        onChange={(e) => setBreak(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Save"/>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default SetTimeSetting