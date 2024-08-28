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
