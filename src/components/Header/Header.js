const Header = ( { toggleLogIn, toggleTimerSetting, openSelect } ) => {

  return (
    <div className="nav-container-header">
        <h1 style={{color:"white", letterSpacing:"5px"}}> Virtual Cafe </h1>
        <ul className='nav-list'>
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