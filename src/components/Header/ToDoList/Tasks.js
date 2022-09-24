import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import Task from "./Task"
import AddTask from "./AddTask"

const Tasks = ({ tasks, onDelete, addTask, toggleToDo }) => {
    const [checkAdd, toggleCheckAdd] = useState(false)
 
  return (
    <div className="modal">
        <div className="modal-content">
            <div className="modal-top">
                <h3>To-Do List!</h3>
                <FaTimes className="x-icon" onClick={toggleToDo}/>
            </div>
            <button onClick={() => toggleCheckAdd(!checkAdd)}> Add Task </button>
            {checkAdd && <AddTask toggleAddTask={() => toggleCheckAdd(!checkAdd)} checkAdd={checkAdd}
                        addTask={addTask}/>}
            <div>
                {tasks.map((task) => (<Task key={task.id} task={task} 
                    onDelete={onDelete}></Task>))} 
            </div>
        </div>
    </div>
  )
}

export default Tasks