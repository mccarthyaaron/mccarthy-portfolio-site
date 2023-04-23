import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/work'>My Work</Link></li>
        <li><Link to='/contact'>Contact Me</Link></li>
      </ul>
    </header>
  )
}

export default Header