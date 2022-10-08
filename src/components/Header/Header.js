const Header = ( { toggleLogIn, toggleTimerSetting, openSelect } ) => {

  return (
    <div>
        <ul className='nav-container'>
            <li className='nav-item'>  
                <p className='header-items' onClick={toggleTimerSetting}> Timer </p>
            </li>
            <li className="nav-item">
            <p className='header-items' onClick={openSelect}> Background </p>
            </li>
            {/* <li className='nav-item'>  
                <p className='header-items' > Shop </p>
            </li> */}
            {/* <li className='nav-item'>  
                <p className='header-items' onClick={toggleLogIn}> Sign In </p>
            </li> */}
        </ul>
    </div>
  )
}

export default Header