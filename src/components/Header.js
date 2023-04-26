import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faM } from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  return (
    <header>
      <div className='header-container'>
        <div className='logo'><FontAwesomeIcon icon={faM} size="2xl" /></div>
        <nav className='normal-nav'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/experience'>Experience</Link></li>
            <li><Link to='/work'>My Work</Link></li>
            <li><Link to='/contact'>Contact Me</Link></li>
          </ul>
          
        </nav>
        <HamburgerMenu />
      </div>
     
    </header>
  )
}

export default Header