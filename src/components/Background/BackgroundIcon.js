import React from 'react'


const BackgroundIcon = ({ background, setBackground }) => {

    return (
        <span className='background-info'>
            <img className='icon' src={background.path} 
                alt={background.description}
                onClick={ () => setBackground(background) }
                />
        </span>
    )
  }

export default BackgroundIcon