import './index.css';
import { useRef, useEffect} from 'react';

export function Models() {

  const carouselRef = useRef(null);
  

  useEffect(() => {
    
    function sliderScroll(){
      const distanceScreenTopElement = carouselRef.current.getBoundingClientRect().top;

      if (carouselRef.current) {
        const carousel = carouselRef.current.children;
        const carouselArray = Array.from(carousel);

        if((distanceScreenTopElement) < 500 && (distanceScreenTopElement) > -500 ){

          carouselArray.forEach((item, index) => {
            let regulator = item.getBoundingClientRect().top;
            let carouselMiddle  = carouselArray[1].getBoundingClientRect().top;
            
            regulator = Math.max(0, Math.min((regulator - 100), 280));            
            carouselMiddle = Math.max(0, Math.min((carouselMiddle - 100), 280));            

            item.style.transform = `translate(0, 0) translateX( ${[regulator -280]}px)`;  
            carouselArray[1].style.transform = `translate(0, 0) translateX( -${[carouselMiddle]}px)`;

          })
          

    
          // // console.log(regulator)
          // carouselArray[0].style.transform = `translate(0, 0) translateX( -${regulator[item]}px)`;
          // // carouselArray[1].style.transform = `translate(0, 0) translateX( ${0}px)`;
          // carouselArray[2].style.transform = `translate(0, 0) translateX( -${regulator[item]}px)`;
          // console.log(regulador) 
        }
        
         
               
        }

  };

 
    window.addEventListener('scroll', () => {
      sliderScroll();             
    });
  }, []);

  

  return (
    <section id='Models'>
        <div className='container-models' >
          <div className='wrapper-titles'>
            <h1 >Veja o que podemos fazer por você</h1>
            <p>Fale com um especialista e escolha o modelo de site para seu negócio</p>
          </div>
            <div className='container-carousel' ref={carouselRef}>
              <div className='carousel' >
                <div className='wrapper-img'>
                  <img src="images/models/frame-1.png" alt="" />
                </div>      
                <div className='wrapper-img'>
                  <img src="images/models/frame-2.png" alt="" />
                </div>      
                <div className='wrapper-img'>
                  <img src="images/models/frame-3.png" alt="" />
                </div>      
                <div className='wrapper-img'>
                  <img src="images/models/frame-4.png" alt="" />
                </div>      
              </div>
              <div className='carousel' >
                <div className='wrapper-img'>
                    <img src="images/models/frame-5.png" alt="" />
                  </div> 
                <div className='wrapper-img'>
                    <img src="images/models/frame-6.png" alt="" />
                  </div> 
                <div className='wrapper-img'>
                    <img src="images/models/frame-7.png" alt="" />
                  </div> 
                <div className='wrapper-img'>
                    <img src="images/models/frame-8.png" alt="" />
                  </div> 
              </div>
              <div className='carousel'>
                <div className='wrapper-img'>
                    <img src="images/models/frame-9.png" alt="" />
                  </div> 
                <div className='wrapper-img'>
                    <img src="images/models/frame-10.png" alt="" />
                  </div> 
                <div className='wrapper-img'>
                    <img src="images/models/frame-11.png" alt="" />
                  </div> 
                <div className='wrapper-img'>
                    <img src="images/models/frame-12.png" alt="" />
                  </div> 
              </div>
            </div>
        </div>
    </section>
  )
}


