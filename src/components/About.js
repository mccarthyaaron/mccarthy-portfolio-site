import { Link } from 'react-router-dom';

const About = ({}) => {
  return (
    <main>
      <div className='container'>
        <div className="introduction">
          <h1 class='about-heading'>Experiences</h1>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, eos exercitationem rerum dignissimos totam obcaecati veritatis. Atque incidunt distinctio nesciunt totam exercitationem quisquam? Provident omnis magnam odio harum blanditiis?
          </p>
          <p>The following are the places I have worked</p>
        </div>

        <div id='jobs'>
          <div id='work-places'>
            <button>OpenMRS</button>
            <button>Google</button>
            <button>OpenAI</button>
          </div>
          <div id='job-details'>
            <div class='job' id="openMRS">
              <h3>Front End Developer</h3>
              <p>June 2023 - December 2025</p>
              <h4>Key Roles and Responsibilities</h4>
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, corrupti.
                </li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, corrupti.
                </li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, corrupti.
                </li>
              </ul>
            </div>
            <div class='job' id="google">
              <h3>FullStack Developer</h3>
              <p>January 2026 - November 2028</p>
              <h4>Key Roles and Responsibilities</h4>
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, corrupti.
                </li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, corrupti.
                </li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, corrupti.
                </li>
              </ul>

            </div>
            <div class='job' id="openAI">
              <h3>Machine Learning Consultant</h3>
              <p>February 2029 - Marchecember 2035</p>
              <h4>Key Roles and Responsibilities</h4>
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, corrupti.
                </li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, corrupti.
                </li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, corrupti.
                </li>
              </ul>
            </div>
          </div>
        
        
        </div>
      </div>

    </main>
    
  )
}

export default About