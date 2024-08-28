import React from 'react';
import './cards.css'; // Make sure to create this CSS file for styling
import jobifyImg from '../imgs/jobify.png'
import mymoniter  from '../imgs/pymoniter.png'
import uib from '../imgs/uib.png'
import arduino from '../imgs/arduino.png'
import rpb from '../imgs/rbp.png'
const Cards = ({ imageSrc, title, description }) => {
  return (
    <>
    <div className="card">
      <img src={jobifyImg} alt={title} className="card-image" />
      <h2 className="card-title"><a href='https://jobtrackerapp-f57ac91e06c6.herokuapp.com/landing'>Jobify</a></h2>
      <p className="card-description">A full stack job MERN job tracking app that allows users to sign up and add, store, and track job applications and interviews. Desktop version allows same functionalities with added perks such as job scrapping, resume building and local storage. Frontend built with React. Backend built with Express and MongoDB. Deployed on Heroku Desktop version built with React, Electron.js, mySQL and Python</p>
    </div>

    <div className="card">
    <img src={mymoniter} alt={title} className="card-image" />
    <h2 className="card-title">MyPyMonitor</h2>
    <p className="card-description">A python CLI tool to view PC system stats. Includes OS running processes, CPU monitoring - Temp, Clocking, Load. GPU monitoring - Temp, Load. Disk drives In/Out, Fan speeds, LAN up/down speeds</p>
    </div>

    <div className="card">
    <img src={uib} alt={title} className="card-image" />
    <h2 className="card-title">UI Builder</h2>
    <p className="card-description">A python CLI tool to view PC system stats. Includes OS running processes, CPU monitoring - Temp, Clocking, Load. GPU monitoring - Temp, Load. Disk drives In/Out, Fan speeds, LAN up/down speeds</p>
    </div>

    <div className="card">
    <img src={arduino} alt={title} className="card-image" />
    <h2 className="card-title">Arduino Automation</h2>
    <p className="card-description">An arduino automation circuit to automate the growing for in door vegetation and mycelium that require optimal growing enviroments for favorable results. The circuit contains a 12/12 hour on off UV light, fans for circulation, and humidity/temp sensors for monitoring, water mist functionality, LCD to moniter output of humidity and temp sensors. Built with C++</p>
    </div>

    <div className="card">
    <img src={rpb} alt={title} className="card-image" />
    <h2 className="card-title">Rashberry Pi server</h2>
    <p className="card-description">A home sever built using Raspberr Pi, the server enables the video live stream from IP camera or android phone to be broadcasted on local area network and video viewed from any web browser on that LAN. Useful for home/property monitoring, personally I use it for checking on unattended 3D printing. Built with Python, web app built with vanilla Javascript</p>
    </div>

    </>
  );
};

export default Cards;
