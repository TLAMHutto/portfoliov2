import { useState, useEffect } from 'react';
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel/mobileCarousel.css"
import './scrollbar.css'
import Carousel from './carousel/MobileCarousel'
import ThreeBoxes from './desktop/ThreeBoxes';
import { ParticleJS } from './three/main'; 

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    // <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
    //   {!isMobile && <ParticleJS />} {/* Render BackgroundCanvas only on desktop */}
    //   <div style={{ position: 'relative', zIndex: 1 }}>
    //     {isMobile ? <Carousel /> : <ThreeBoxes />}
    //   </div>
    // </div>
    <div>
          < Carousel />
    </div>

  );
};

export default App;