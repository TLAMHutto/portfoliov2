import React, { useEffect } from 'react';
import './ThreeBoxes.css';
import white from '../imgs/white.png'

function ThreeBoxes() {

  return (
    <div className="container">
      <div className="column column1"></div>
      <div className="column column2">
        <img src={ white } className='logo'></img>
      </div>
      <div className="column column3"></div>
    </div>
  );
}

export default ThreeBoxes;
