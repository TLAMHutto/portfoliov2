import React, { useEffect } from 'react';
import './ThreeBoxes.css';
import gold from '../imgs/gold.png'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import MediaCard from './Cards';

function ThreeBoxes() {
  return (
    <div className="container">
      <div className="column column1">
        <div className='cards-container'>
          <h3 className='section-title'>Projects</h3>
          <MediaCard />
        </div>
      </div>
      <div className="column column2">
        <img src={gold} className='logo'></img>
        <div className='aboutMe-container'>
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
      <div className="column column3">
        <div className='column3-container'>

          <div className="education-experience-container">

            <div className="edu">
              <h3 className="section-title">Education</h3>
              <p className="section-content">
                A.A.S. Instrumentation and Electrical Technician, Kilgore College<br />
                <br />
                B.S. Computer Science, University of Texas<br />
                <br />
                M.S. Computer Science, University of Colorado<br />
                <br />
                M.S. Electrical Engineering, University of Colorado
                <br />
              </p>
            </div>

          <div className="experience-container">
            <h3 className='section-title'>Experience</h3>
            <h4>Parsons Corp</h4>
            <p>Software Engineer | 2022-2024</p>
            <ul>
              <li>SaaS frontend development, converting vanilla JavaScript to React, 3D engine using Three.js upgrade and development.</li>
              <li>Cloud-based backend creation and integration using AWS, Terraform, Amazon VPC.</li>
              <li>CI/CD using Docker, Jira, Bitbucket.</li>
            </ul>
          </div>

          <div className="experience-container">
            <h4>Target</h4>
            <p>Front End Developer | 2020-2022</p>
            <ul>
              <li>Frontend development using React and Redux to build and maintain reusable and modular components to enhance the user interface and experience.</li>
              <li>Backend integration with PostgreSQL, MongoDB, Oracle for data storage, relational storage, and enterprise-level data management.</li>
              <li>CI/CD technologies used: Docker, Drone, Gatlin, Jest.</li>
            </ul>
          </div>

          <div className="experience-container">
            <h4>Norris Cylinder</h4>
            <p>Software Engineer | 2018-2020</p>
            <ul>
              <li>Develop and maintain in-house software applications to interface with PLCs, HMIs, robots, sensors, and other automation systems using Python and JavaScript.</li>
              <li>Implement data collection systems to gather data from various sensors (e.g., temperature, pressure, flow) and integrate this data into software applications using MatLab.</li>
              <li>Work closely with other engineers, operators, and company management to gather requirements, understand system needs, and ensure successful project delivery.</li>
            </ul>
          </div>

          <div className="experience-container">
            <h4>U.S. Navy</h4>
            <p>Tomahawk Missile Technician | 2011-2017</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ThreeBoxes;

