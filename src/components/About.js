import { Link } from 'react-router-dom';

const About = ({openMRSRef,openAIRef,googleRef}) => {
  const scrollToOpenMrs = () => {
    openMRSRef.current.scrollIntoView({ behavior:'smooth' })
  }
  const scrollToOpenAI = () => {
    openAIRef.current.scrollIntoView({ behavior:'smooth' })
  }
  const scrollToGoogle = () => {
    googleRef.current.scrollIntoView({ behavior:'smooth' })
  }
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
            <button onClick={scrollToOpenMrs}>OpenMRS</button>
            <button onClick={scrollToGoogle}>Google</button>
            <button onClick={scrollToOpenAI}>OpenAI</button>
          </div>
          <div id='job-details'>
            <div class='job' ref={openMRSRef} id="openMRS">
              <h3>OpenMRS</h3>
              <h4>Postion: Front End Developer(June 2023 - December 2025)</h4>
              
              <h5>Key Roles and Responsibilities</h5>
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, corrupti.
                </li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, corrupti.
                </li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, corrupti.
                </li>
              </ul>
            </div>
            <div class='job' ref={googleRef} id="google">
              <h3>Google</h3>
              <h4>FullStack Developer(January 2026 - November 2028)</h4>
              <h5>Key Roles and Responsibilities</h5>
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, corrupti.
                </li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, corrupti.
                </li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, corrupti.
                </li>
              </ul>

            </div>
            <div class='job' ref={openAIRef} id="openAI">
              <h3>OpenAI</h3>
              <h4>Machine Learning Consultant(February 2029 - Marchecember 2035)</h4>
              <h5>Key Roles and Responsibilities</h5>
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