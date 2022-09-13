import React from 'react'

const BackgroundIcon = ({background}) => {
    return (
        <span className='background-info'>
            <img className='icon left' src={background.path} alt={background.description}/>
            <h5 className='right'> {background.description} </h5>
        </span>
    )
  }

export default BackgroundIcon