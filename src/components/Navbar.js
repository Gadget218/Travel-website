import React, {useState, useEffect} from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom';
import './Navbar.css'
import {Button} from './Button'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [click, setClick] = useState(false);//initialise value is false, it will get updated once user clicks
  const [button, setButton]=useState(true)


  const handleClick=()=>setClick(!click);//value will be reverse of setCLick defined above
  const closeMobileMenu = () =>setClick(false)

  const showButton = () => {
    if(window.innerWidth <=960){
      setButton(false)//button will disappear if window size is 960 or less 
    } else{
      setButton(true)
    }
  };
//useEffect is used to make the menu bar get replaced by the menu icon whenever in mobile and tablet view
  useEffect(()=>{
    showButton()
  },[])


   window.addEventListener('resize', showButton);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}/*it will menu when travel icon is clicked*/>
                TRAVEL <li className='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}> {/* creating menu icon*/}
              <li className={click ? 'fas fa-times' : 'fas fa-bars'} /> {/*'fab fa-typo3' likely refers to the class name that is being used to display the Typo3 logo icon from the Font Awesome library. click once it will open the menu, click again the menu will close*/}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onCLick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/services' className='nav-links' onCLick={closeMobileMenu}>
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/products' className='nav-links' onCLick={closeMobileMenu}>
                  Products
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/sign-up' className='nav-links' onCLick={closeMobileMenu}>
                  Sign Up
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} {/* if btn outline is not there then it will use default STYLE[0] that is btn primary*/}
        </div>
        </nav>
    </>
  )
}

export default Navbar;


