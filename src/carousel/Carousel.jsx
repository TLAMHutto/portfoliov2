import React, { useRef, useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import image1 from '../imgs/3.png';
import image2 from '../imgs/2.png';
import image3 from '../imgs/1.png';

const Carousel = () => {
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
          const x = (slide.target + flkty.x) * -1 / 3;
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
              <img src="http://unsplash.it/300/?image=58" alt="" ref={el => imgsRef.current[0] = el} />
              <span className="badge">
                <i className="fa fa-camera-retro"></i>
                1
              </span>
            </div>
            <div className="card__info">
              <h2 className="card__title">
                Project No<sup>01</sup>
              </h2>
              <p className="card__desc">Just another simple card user interface</p>
            </div>
          </div>
        </div>
  
        <div className="carousel-item">
          <div className="card">
            <div className="card__image">
              <img src="http://unsplash.it/300/?image=87" alt="" ref={el => imgsRef.current[1] = el} />
              <span className="badge">
                <i className="fa fa-camera-retro"></i>
                2
              </span>
            </div>
            <div className="card__info">
              <h2 className="card__title">
                Project No<sup>02</sup>
              </h2>
              <p className="card__desc">Just another simple card user interface</p>
            </div>
          </div>
        </div>
  
        <div className="carousel-item">
          <div className="card">
            <div className="card__image">
              <img src="http://unsplash.it/300/?image=116" alt="" ref={el => imgsRef.current[2] = el} />
              <span className="badge">
                <i className="fa fa-camera-retro"></i>
                3
              </span>
            </div>
            <div className="card__info">
              <h2 className="card__title">
                Project No<sup>03</sup>
              </h2>
              <p className="card__desc">Just another simple card user interface</p>
            </div>
          </div>
        </div>
  
        
      </div>
    </div>
  );
  
};

export default Carousel;
