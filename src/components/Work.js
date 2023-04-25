import {AiFillGithub} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import img from '../img/project.png';

const Work = () => {
  return (
    <main>
      <div className='container'>
        <h1>My Work</h1>
        <p class='intro-p'>These are some of the projects that I have worked on</p>      
        <div className='projects'>
          <div className="project one">
            <h3>Project 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate soluta laboriosam deserunt saepe delectus rem vero pariatur ipsam porro nam.</p>
            <img src={img} alt="project 1" />
            <div className='icons-links'>
              <Link to='#'><AiFillGithub /></Link>
              <Link to='#'>Project</Link>
            </div>
          </div>
          <div className="project two">
            <h3>Project 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate soluta laboriosam deserunt saepe delectus rem vero pariatur ipsam porro nam.</p>
            <img src={img} alt="project 1" />
            <div className='icons-links'>
              <Link to='#'><AiFillGithub /></Link>
              <Link to='#'>Project</Link>
            </div>
          </div>
          <div className="project three">
            <h3>Project 3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate soluta laboriosam deserunt saepe delectus rem vero pariatur ipsam porro nam.</p>
            <img src={img} alt="project 1" />
            <div className='icons-links'> 
              <Link to='#'><AiFillGithub /></Link>
              <Link to='#'>Project</Link>
            </div>
          </div>
      </div>
    </div>
    </main>
  )
}

export default Work