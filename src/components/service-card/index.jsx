import './index.css';
import { useRef, useState, useEffect } from 'react';

export function  ServiceCard({title, text, link, index}) {


  const [ sliderAnimation, setSliderAnimation] = useState('');
  const cardRef = useRef();


  function sliderScroll(){
     const retangulo = cardRef.current.getBoundingClientRect().top;
    if((retangulo) < 600 && (retangulo) > -500 ){
        setSliderAnimation(`service-card${index}`);
    }
};
  useEffect(() => {    
    window.addEventListener('scroll', () => {
      sliderScroll();             
    });
  });

  return (
    <div className={`service-card ${sliderAnimation} `} ref={cardRef}>
        <div className='wrapper-icon'>
            <img src="icons/services/storm-brain-icon.png.svg" alt="arrow-up" />
        </div>
        <div className='service-content'>
            <div className='wrapper-title'><h2>{title}</h2></div>
            <div className='wrapper-text'><p>{text}</p></div>
            <a onclick="return gtag_report_conversion('https://wa.me/5521986465148');" href="https://wa.me/5521986465148" target='_blanc'>{link}<div></div> </a>
        </div>
    </div>
  )
}