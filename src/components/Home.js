import {AiFillGithub, AiFillTwitterCircle} from 'react-icons/ai'
import {Link} from 'react-router-dom';
import About from './About'

const Home = () => {
  return (
    <main>
      <div className='container'>
        <h1>McCarthy Aaron</h1>
        <h1>Full Stack Developer</h1>
        <p>I am a software enginner specialising in web development. I am proficient in React, Angular for the front end and Node, Django for the back end.
        </p>
        <div>
          <Link to='https://github.com/mccarthyaaron'><AiFillGithub /></Link>
          <Link><AiFillTwitterCircle /></Link>
          <div>
          <button><Link to='#about'>Check Out my Work</Link></button>
          

          
          <About />
          </div>

        
    
        
          
        </div>
      </div>
    
    </main>
    
  )
}

export default Home