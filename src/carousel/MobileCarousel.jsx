import React, { useRef, useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import image1 from '../imgs/3.png';
import image2 from '../imgs/2.png';
import image3 from '../imgs/1.png';

const MobileCarousel = () => {
  const carouselRef = useRef(null);
  const imgsRef = useRef([]);

  useEffect(() => {
    const elem = carouselRef.current;
    const flkty = new Flickity(elem, {
      imagesLoaded: true,
      cellAlign: 'center',
      contain: true
    });

    const docStyle = document.documentElement.style;
    const transformProp = typeof docStyle.transform === 'string' ? 'transform' : 'WebkitTransform';

    const handleScroll = () => {
      flkty.slides.forEach((slide, i) => {
        const img = imgsRef.current[i];
        const x = (slide.target + flkty.x) * -1 / 1.2;
        img.style[transformProp] = `translateX(${x}px) scale(1.3)`;
      });
    };

    flkty.on('scroll', handleScroll);

    return () => {
      flkty.off('scroll', handleScroll);
      flkty.destroy();
    };
  }, []);

  return (
    <div className="phone-viewport">
      <div className="carousel" ref={carouselRef}>
        <div className="carousel-item">
          <div className="card">
            <div className="card__image">
              <img src={image1} alt="" ref={el => imgsRef.current[0] = el} />
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="card">
            <div className="card__image">
              <img src={image2} alt="" ref={el => imgsRef.current[1] = el} />

            </div>

          </div>
        </div>

        <div className="carousel-item">
          <div className="card">
            <div className="card__image">
              <img src={image3} alt="" ref={el => imgsRef.current[2] = el} />

            </div>

          </div>
        </div>

      </div>
    </div>
  );

};

export default MobileCarousel;
