import BackgroundIcon from "./BackgroundIcon"
import './Background.css'

const SelectBackground = ({allBackgrounds, closeSelect, setBackground}) => {
  return (
      <div className="popup-inner">
        <div className="popup-header">
          <h5 className='title'> Select a Background</h5>
          <div className='close-button'>
            <button onClick={closeSelect}> X </button>
          </div>
        </div>
        <div className="popup-list-outer">
          <div className="popup-list">
            <ul>
              {allBackgrounds.map((task) => (
                <li key={task.id}>
                  <BackgroundIcon allBackgrounds={allBackgrounds} background={task}
                      setBackground={setBackground}/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  )
}

export default SelectBackground