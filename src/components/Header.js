import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faM } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  
  return (
    <header>
      <div>
        <div className='logo'><FontAwesomeIcon icon={faM} size="2xl" /></div>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/work'>My Work</Link></li>
            <li><Link to='/contact'>Contact Me</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header