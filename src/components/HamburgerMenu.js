import React from 'react';
import { Link } from 'react-router-dom';
import { useState} from 'react';

const HamburgerMenu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const showAndCloseMenu = () => {
        setShowMenu(!showMenu);
    }
    const removeMenu = (e) => {
        setShowMenu(!showMenu);
    }

    // if screen size gets past a certain width, change state of showMenu to false
    const closeMenu = () => {
        if(window.innerWidth > 768) {
            setShowMenu(false);
        }
    }
    window.addEventListener('resize', closeMenu );

  return (
   <div className={`hamburger-menu ${showMenu ? 'show' : 'false'}`}>

        <div className='menu-icon' onClick={showAndCloseMenu} >
            <div className='btn-line'></div>
            <div className='btn-line'></div>
            <div className='btn-line'></div>
        </div>
        
        <nav className='hamburger-nav'>
            <div className='overlay'></div>
            <div className="navigation">
                <ul>
                    <li><Link to='/' onClick={removeMenu}>Home</Link></li>
                    <li><Link to='/experience' onClick={removeMenu}>Experience</Link></li>
                    <li><Link to='/work' onClick={removeMenu}>My Work</Link></li>
                    <li><Link to='/contact' onClick={removeMenu}>Contact Me</Link></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default HamburgerMenu