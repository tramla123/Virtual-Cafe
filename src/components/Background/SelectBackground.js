import BackgroundIcon from "./BackgroundIcon"
import './Background.css'

const SelectBackground = ({allBackgrounds, closeSelect}) => {
  return (
    <div className="popup">
      <h5 className='title'> Select a Background</h5>
      <div className='close-button'>
        <button onClick={closeSelect}> X </button>
      </div>
      <ul>
        {allBackgrounds.map((task) => (
          <li key={task.id}>
            <BackgroundIcon background={task}/>
          </li>
        ))}
      </ul>
      </div>
  )
}

export default SelectBackground