import React, { useRef, useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import image1 from '../imgs/3.png';
import image2 from '../imgs/2.png';
import image3 from '../imgs/1.png';
import AboutMe from './AboutMe';
import './MobileApp.css'
import './aboutMe.css'
const MobileApp = () => {


  return (
    <div className='container'>
      <AboutMe />
    </div>

  );

};

export default MobileApp;
