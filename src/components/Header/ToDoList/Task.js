import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const Task = ( {task, onDelete} ) => {
  const [complete, setComplete] = useState(false)

  return (
    <li key={task.id} className="task-item">
        <input style={{"gridArea": "1 / 1 / 2 / 2"}} type='checkbox' value={complete}
        onChange={(e) => setComplete(e.currentTarget.checked)}/>
        <p style={{"gridArea": "1 / 2 / 2 / 3"}}> {task.task}</p>
        <FaTimes className="close" style={{"gridArea": "1 / 3 / 2 / 4"}}
        onClick={() => onDelete(task.id)}/>
    </li>
  )
}

export default Task