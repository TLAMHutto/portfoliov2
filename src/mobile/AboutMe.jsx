import React from 'react';
import './aboutMe.css'; // Import the CSS file for styling
import Logo from '../imgs/gold.png'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <div className="card">
      <div className="logo">
        <img src={ Logo } alt="Logo" />
      </div>
      <div className="about-me">
        <p>
            I am a full stack engineer with 6+ years experience,
            proficient in designing and delivering scalable solutions with expertise in
            technologies including JavaScript frameworks (React, Angular, Electron.js,
            Three.js) and Python. Skilled in integrating cloud technologies and popular
            backend solutions (e.g., Node.js, Express, Django, AWS, Docker) to build
            robust and efficient SaaS applications.
        </p>
        <p className='links'><a href=''>Education and Experience</a></p>
        <p className='links'><a href=''>Projects</a></p>
      </div>
      <div className="icons">
          <a href="https://github.com/TLAMHutto" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/keaton-hutto8/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:keatonhutto8@gmail.com">
            <FaEnvelope />
          </a>
      </div>
    </div>
  );
};

export default AboutMe;
