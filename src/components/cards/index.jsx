import './index.css';
import { CardLeft } from './cards-down/left';
import { CardRight } from './cards-down/right';
// import { useEffect, useRef } from 'react';
export function Cards(){


    // useEffect(() => {    

    //     let lastScrollTop = 0;

    //     window.addEventListener("scroll", function() {
    //         let scrollTop = window.screenY || document.documentElement.scrollTop;
        
    //         if (scrollTop > lastScrollTop) {
    //             // Scroll para baixo
    //             console.log("Scroll para baixo");
    //         } else {
    //             // Scroll para cima
    //             console.log("Scroll para cima");
    //         }
        
    //         lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    //     });
    //   });

    return(
        <div className='cards-banner'>
            <div className='cards-up'>
                <img className='PageWebflowVector' src='images/cards/PageWebflowVector.svg' alt='icone de cartão '></img>
                <img className='PageSectionVector' src='images/cards/PageSectionVector.svg' alt='icone de cartão'></img>
            </div>
            <div className='cards-middle'>
                    <img className='PageDesktopVector' src='images/cards/PageDesktopVector.svg' alt=''></img>
            </div>
            <div className='cards-down'>
                    <CardLeft></CardLeft>
                    <CardRight></CardRight>
                </div>
        </div>
    )
}