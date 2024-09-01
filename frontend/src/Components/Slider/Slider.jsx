import React, { useState} from 'react';
// import { useEffect } from 'react';
import './Slider.css';
// import tv from './img/tv.png';
// import speaker from './img/speaker.png';
// import rasppi from './img/raspi.png';
// import laptop from './img/laptop.png';
// import iphone from './img/iphone-x-pictures-45216.png';
import imgg from '../Assets/mainbanner.png'
import imgg2 from '../Assets/mainbanner2.png'
import imgg3 from '../Assets/mainbanner3.png'
import imgg4 from '../Assets/mainbanner4.png'
import imgg5 from '../Assets/mainbanner5.png'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import { Link } from 'react-router-dom'

const slides = [
  { img: imgg, title: 'BRAVIA NEW TV', price: '₹4000',path:'/audio&gaming' },
  { img: imgg2, title: 'JBL NEW SPEAKER', price: '₹5000',path:'/audio&gaming' },
  { img: imgg3, title: 'RASPBERRY PI', price: '₹4500',path:'/audio&gaming' },
  { img: imgg4, title: 'INTEL i7', price: '₹20000',path:'/televisions' },
  { img: imgg5, title: 'IPHONE 15', price: '₹100000',path:'/mobiles' },
];
const delay = 3500;

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);


  React.useEffect(() => {
    setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
  
    return () => {};
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1  :prevIndex - 1));
  };

  const handleNext = () => {
     setCurrentIndex((prevIndex) => ( prevIndex === slides.length - 1 ? 0 :prevIndex + 1));
  };

  return (
    <div className='slider'>
      <div
        className='Sliderwrapper'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className='Slideritem' key={index}>
            <img src={slide.img} alt={slide.title} className='sliderImg' />
            <div className='sliderBg'></div>
             <Link to={slide.path}>
              <button className='buyButton'>BUY NOW!</button>
              </Link>
          
          </div>
        ))}
      </div>
      <button className='img-slider-btn left' onClick={handlePrev}>
        <ArrowBigLeft />
      </button>
      <button className='img-slider-btn right' onClick={handleNext}>
        <ArrowBigRight />
      </button>
    </div>
  );
}
