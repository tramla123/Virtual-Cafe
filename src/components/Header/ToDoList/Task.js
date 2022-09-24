import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const Task = ( {task, onDelete} ) => {
  return (
    <div>
        <input type='checkbox'/>
        <h3> {task.task} <FaTimes onClick={() => onDelete(task.id)}/> </h3>
    </div>
  )
}

export default Task