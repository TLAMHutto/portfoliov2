import Carousel from './carousel/MobileCarousel'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel/mobileCarousel.css"
import ThreeBoxes from './desktop/ThreeBoxes';
import { useState, useEffect } from 'react';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <Carousel /> : <ThreeBoxes />;
};

export default App;