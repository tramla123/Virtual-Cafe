import { useState, useEffect } from "react"
import { FaTimes } from 'react-icons/fa'

const AddTask = ({toggleAddTask, addTask}) => {
    const [task, setTask] = useState('')
    const [taskAdded, setTaskAdded] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        addTask(task)
        setTask("")
        setTaskAdded(!taskAdded)
    }

    useState(() => {
        if(task)
            setTaskAdded(!taskAdded)
    })

  return (
    <div>
        <form onSubmit={onSubmit}>
            <div>
                <h3>Add Task</h3>
                <FaTimes className="x-icon" onClick={toggleAddTask}/>
            </div>
            <label htmlFor="taskname"> Type your task below: </label><br/>
            <input type="text" id="taskname" required value={task}
                onChange={(e) => setTask(e.target.value)}/>
            <input type="submit" value="Save"/>
        </form>
        {taskAdded && <p>Task Added Successfully!</p>}
    </div>
  )
}

export default AddTask