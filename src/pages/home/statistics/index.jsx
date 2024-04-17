import './index.css';
import { Partners } from '../../../components/partners';
import { useRef, useState, useEffect } from 'react';

export function Statistics(){

    const [ sliderAnimation, setSliderAnimation] = useState('');
    const statisticsRef = useRef();
  
  
    function sliderScroll(){
       const retangulo = statisticsRef.current.getBoundingClientRect().top;
      if((retangulo) < 400 && (retangulo) > -500 ){
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
                <h1>46%</h1>
                {/* <h4>REFERRED CLIENTS</h4> */}
                <p>Das pessoas pesquisam por empresas locais. Hoje é crucial para as empresas ter um site para serem encontradas !!</p>
            </div>
            <div className='statistic-middle'>
                <h1>90%</h1>
                <h4>dos consumidores começam com uma pesquisa online.E estamos aqui para fazer justamente isso!</h4>
                <p>ImpulseOn +10.000 leads • 2024 |2023 | 2022 </p>
            </div>
            <div className='statistic-right'>
                <h1>450k</h1>   
                {/* <h4>REFERRED CLIENTS</h4> */}
                <p>Investidos em campanhas de publicidade online, estamos comprometidos em levar seu negócio ao próximo nível.</p>
            </div>
           </div>
           <Partners></Partners>
        </section>
    )
}