import { useState, useEffect } from "react"
import { FaTimes } from 'react-icons/fa'

const AddTask = ({ addTask, closeAdd }) => {
    const [task, setTask] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        addTask(task)
        setTask("")
    }
  return (
    <div>
        <FaTimes onClick={closeAdd}/>
        <form onSubmit={onSubmit}>
            <fieldset style={{borderRadius:"20px"}}>
                <legend>Add Task</legend>
                <input type="text" required value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="add-task-box"
                    placeholder="Enter your task..."/>
                <input type="submit" value="Add"/>
            </fieldset>
        </form>
    </div>
  )
}

export default AddTask