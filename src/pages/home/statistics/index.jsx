import './index.css';
import { Partners } from '../../../components/partners';
import { useRef, useState, useEffect } from 'react';

export function Statistics(){

    const [ sliderAnimation, setSliderAnimation] = useState('');
    const statisticsRef = useRef();
  
  
    function sliderScroll(){
       const retangulo = statisticsRef.current.getBoundingClientRect().top;
      if((retangulo) < 250 && (retangulo) > -500 ){
          setSliderAnimation('statistic-animation');
      }
  };
    useEffect(() => {    
      window.addEventListener('scroll', () => {
        sliderScroll();             
      });
    });

    return(
        <section id='Statistics'>
           <div className={`container-1140px container-statistics ${sliderAnimation}`} ref={statisticsRef}>
            <div className='statistic-left'>
                <h1>220+</h1>
                <h4>REFERRED CLIENTS</h4>
                <p>Clients recommend our team to their inner circle; our relationships are based on trust. This speaks volumes.</p>
            </div>
            <div className='statistic-middle'>
                <h1>1%</h1>
                <h4>PRINCIPAL UM POR CENTO DE TODAS AS AGÊNCIAS DE MARKETING GLOBAL</h4>
                <p>Clutch Global 1000 Winner • 2023 | 2022 | 2021</p>
            </div>
            <div className='statistic-right'>
                <h1>220+</h1>   
                <h4>REFERRED CLIENTS</h4>
                <p>Clients recommend our team to their inner circle; our relationships are based on trust. This speaks volumes.</p>
            </div>
           </div>
           <Partners></Partners>
        </section>
    )
}