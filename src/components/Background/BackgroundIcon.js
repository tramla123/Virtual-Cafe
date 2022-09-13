import React from 'react'
import { FormControl } from 'react-bootstrap';
import Background from './Background';

const selectBackground = (background) => {
    console.log(background)
}

const BackgroundIcon = ({ allBackgrounds ,background }) => {

    return (
        <span className='background-info'>
            <img className='icon left' src={background.path} 
                alt={background.description}
                onClick={ () => selectBackground(background) }
                />
            <h5 className='right'> {background.description} </h5>
        </span>
    )
  }

export default BackgroundIcon