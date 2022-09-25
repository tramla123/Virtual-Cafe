import { FaTimes } from 'react-icons/fa'
import Task from "./Task"
import AddTask from "./AddTask"
import "../../Background/Background.css"

const Tasks = ({ tasks, onDelete, addTask, toggleToDo }) => {

 
  return (
    <div className="popup">
        <div className="popup-inner">
            <div className="modal-top" style={{backgroundColor:"white"}}>
                <h2>To-Do List!</h2>
                <FaTimes className="x-icon" onClick={toggleToDo}/>
            </div>
            <AddTask addTask={addTask}/>
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
    </div>
  )
}

export default Tasks