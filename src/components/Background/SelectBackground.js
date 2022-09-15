import BackgroundIcon from "./BackgroundIcon"
import './Background.css'
import { FaTimes } from 'react-icons/fa'

const SelectBackground = ({allBackgrounds, closeSelect, setBackground}) => {
  return (
      <div className='popup'>
        <div className="popup-inner">
          <div className="popup-header">
            <h5 className='title'> Select a Background</h5>
            <div>
              <FaTimes className="x-icon" onClick={closeSelect} />
            </div>
          </div>
          <div className="popup-list-outer">
            <div className="popup-list">
              <ul>
                {allBackgrounds.map((task) => (
                  <li key={task.id}>
                    <BackgroundIcon allBackgrounds={allBackgrounds} background={task}
                        setBackground={setBackground} closeSelect={closeSelect} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SelectBackground