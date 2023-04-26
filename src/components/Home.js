import {AiFillGithub, AiFillTwitterCircle} from 'react-icons/ai'
import {Link} from 'react-router-dom';
import About from './About';
import { useRef } from 'react';

const Home = ({}) => {
  
  return (
    <main>
      <div className='container'>
        <p className='intro'>Hey, my name is</p>
        <h1 className='name'>McCarthy Aaron.</h1>
        <h1 className='title'>Full Stack <span>Developer.</span></h1>
        <p className='description'>I am a software enginner specialising in web development. I am proficient in React, Angular for the front end and Node, Django for the back end.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quos et accusamus laudantium placeat suscipit, iusto illum rem sint excepturi dolorum cupiditate ullam harum deleniti culpa nihil quam minima, nam ipsam eum sunt! Obcaecati quam itaque quibusdam, ab illo ipsam autem beatae hic a rem animi saepe aliquid temporibus eaque.
        </p>
        <div className='icons'>
          <Link to='https://github.com/mccarthyaaron'>
            <AiFillGithub />
          </Link>
          <Link>
            <AiFillTwitterCircle />
          </Link>
         

        </div>
      </div>
    
    </main>
    
  )
}

export default Home