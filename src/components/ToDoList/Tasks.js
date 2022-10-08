import { useState } from "react"
import Task from "./Task"
import AddTask from "./AddTask"
import "./ToDoList.css"

const Tasks = ({ tasks, onDelete, addTask, toggleToDo }) => {

  const [showAddTask, toggleAddTask] = useState(false)

  return (
    <div >
        <div className="task-header">
            <h2 >To-Do List!</h2>
            {!showAddTask && <button onClick={() => toggleAddTask(!showAddTask)}> Add </button>}
        </div>
        <div>
            {showAddTask && <AddTask addTask={addTask} closeAdd={() => toggleAddTask(!showAddTask)}/>}
        </div>
        <div className="popup-list-outer">
            <div className="popup-list">
                {tasks.length > 0 ? (
                <ul>
                    {tasks.map((task) => (<Task key={task.id} task={task} 
                    onDelete={onDelete}></Task>))} 
                </ul>) : "No current task to display ... Z z z..."}    
            </div>       
        </div>
    </div>
  )
}

export default Tasks