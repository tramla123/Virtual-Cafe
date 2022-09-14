
const BackgroundIcon = ({ background, setBackground, closeSelect }) => {

    return (
        <span className='background-info'>
            <img className='icon' src={background.path} 
                alt={background.description}
                onClick={ () => {setBackground(background); closeSelect()} }
                />
        </span>
    )
  }

export default BackgroundIcon