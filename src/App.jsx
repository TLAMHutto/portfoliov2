import { useState, useEffect } from 'react';
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mobile/AboutMe.css"
import './scrollbar.css'
import MobileApp from './mobile/MobileApp'
import ThreeBoxes from './desktop/ThreeBoxes';
import { ParticleJS } from './three/main'; 

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {isMobile ? <MobileApp /> : <ThreeBoxes />}
    </div>
  );
};

export default App;