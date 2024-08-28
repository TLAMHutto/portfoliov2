import React, { useEffect } from 'react';
import './ThreeBoxes.css';
import gold from '../imgs/gold.png'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
function ThreeBoxes() {

  return (
    <div className="container">
      <div className="column column1"></div>
      <div className="column column2">
        <img src={ gold } className='logo'></img>
        <div className='aboutMe-container'>
          {/* <h3 className='name'>
            Im Keaton. . .
          </h3> */}
          <p className='aboutMe'>
          I am a full stack engineer with 6+ years experience,
        proficient in designing and delivering scalable solutions with expertise in
        technologies including JavaScript frameworks (React, Angular, Electron.js,
        Three.js) and Python. Skilled in integrating cloud technologies and popular
        backend solutions (e.g., Node.js, Express, Django, AWS, Docker) to build
        robust and efficient SaaS applications.
          </p>

        </div>
        <div className="icon-row">
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:your.email@example.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="column column3"></div>
    </div>
  );
}

export default ThreeBoxes;
