import {AiFillGithub} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Work = () => {
  return (
    <div>
      <h3>MyWork</h3>
      <p>These are some of the projects that I have worked on</p>
      <div>
        <div className="project1">
          <h3>Project 1</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate soluta laboriosam deserunt saepe delectus rem vero pariatur ipsam porro nam.</p>
          <div>
            <Link to='#'><AiFillGithub /></Link>
            <Link to='#'>Project</Link>
          </div>
        </div>
        <div className="project1">
          <h3>Project 2</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate soluta laboriosam deserunt saepe delectus rem vero pariatur ipsam porro nam.</p>
          <div>
            <Link to='#'><AiFillGithub /></Link>
            <Link to='#'>Project</Link>
          </div>
        </div>
        <div className="project1">
          <h3>Project 3</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate soluta laboriosam deserunt saepe delectus rem vero pariatur ipsam porro nam.</p>
          <div>
            <Link to='#'><AiFillGithub /></Link>
            <Link to='#'>Project</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work