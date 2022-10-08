import { useState } from "react"
import Task from "./Task"
import AddTask from "./AddTask"
import "./ToDoList.css"

const Tasks = ({ tasks, onDelete, addTask, toggleToDo }) => {

  const [showAddTask, toggleAddTask] = useState(false)

  return (
    <div className="task-outer">
        <div className="task-inner">
            <div className="task-header">
                <h2 >To-Do List!</h2>
                {!showAddTask && <button onClick={() => toggleAddTask(!showAddTask)}> Add Task </button>}
            </div>
            <div>
                {showAddTask && <AddTask addTask={addTask} closeAdd={() => toggleAddTask(!showAddTask)}/>}
            </div>
            <div className="task-list-outer">
                {tasks.length > 0 ? (
                <ul style={{paddingRight:"1rem"}}>
                    {tasks.map((task) => (<Task key={task.id} task={task} 
                    onDelete={onDelete}></Task>))} 
                </ul>) : "No current task to display ... Z z z..."}      
            </div>
        </div>
    </div>
  )
}

export default Tasks