import React from 'react'
import Song from '../../assets/audio/Intellect.mp3'
import Clock from './Clock'
import Button from '../Button'

const MediaNav = ( {openSelect, showAdd} ) => {

  return (
    <div>
      <ul className='nav-container media-nav'>
      <li className='nav-item' > 
          <Clock/>
        </li>
        <li className='nav-item' >  
          <audio controls loop>
            <source src={Song} type='audio/mpeg'/>
          </audio>
        </li>
        <li className='nav-item'>
          <Button text="Background" onClick={openSelect}/>
        </li>
      </ul> 
    </div>
  )
}

export default MediaNav