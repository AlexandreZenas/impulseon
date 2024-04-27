import './index.css';
import './animation-distorted.css';
import { CardLeft } from './cards-down/left';
import { CardRight } from './cards-down/right';
import { useEffect, useRef } from 'react';
export function Cards(){

    const cardMiddle = useRef()
    const cardTopLeft = useRef();
    const cardTopRight = useRef();
    const cardBotLeft = useRef();
    const cardBotRight = useRef();
    
    const cardsArray = [ cardTopLeft, cardTopRight, cardMiddle, cardBotLeft, cardBotRight]
 

    useEffect(() => {    
        window.addEventListener('wheel', (e) => {
            var directionY = e.deltaY;
            if( directionY > 0){
                cardTopLeft.current.style.transform = `translate3d(0%, 20%, 0px) scale3d(1, 1, 1) rotateX(16deg) rotateY(-25deg) rotateZ(7deg) skew(0deg, 0deg)`;
                cardTopRight.current.style.transform = `translate3d(0%, 12%, 0px) scale3d(1, 1, 1) rotateX(16deg) rotateY(-25deg) rotateZ(7deg) skew(0deg, 0deg)`;
                cardMiddle.current.style.transform = `translate3d(0.00168px, 7px, 0px) scale3d(1, 1, 1) rotateX(16deg) rotateY(-25deg) rotateZ(7deg) skew(0deg, 0deg)`;
                cardBotLeft.current.style.transform = `translate3d(32%, -8%, 0px) scale3d(1, 1, 1) rotateX(16deg) rotateY(-25deg) rotateZ(7deg) skew(0deg, 0deg)`;
                cardBotRight.current.style.transform = `translate3d(-5%, -6%, 0px) scale3d(1, 1, 1) rotateX(16deg) rotateY(-25deg) rotateZ(7deg) skew(0deg, 0deg)`;
            }
            else if( directionY < 0){
                cardsArray.map((item) => {
                    item.current.style.transform = 'translate3d(0, 0, 0) rotateX(0) rotateY(0) rotateZ(0) skew(0deg, 0deg)';
                })
            }
       
        })
        var startY, lastY, endY;

        window.addEventListener('touchstart', (e) => {
            // Obter a posição Y inicial do toque
            startY = e.touches[0].clientY;
        }, false);

        document.addEventListener('touchmove', (e) => {
           // Obter a posição Y atual do toque
            endY = e.touches[0].clientY;

            // Verificar a direção do movimento
            if (endY < lastY) {
                cardTopLeft.current.style.transform = `translate3d(0%, 20%, 0px) scale3d(1, 1, 1) rotateX(16deg) rotateY(-25deg) rotateZ(7deg) skew(0deg, 0deg)`;
                cardTopRight.current.style.transform = `translate3d(0%, 12%, 0px) scale3d(1, 1, 1) rotateX(16deg) rotateY(-25deg) rotateZ(7deg) skew(0deg, 0deg)`;
                cardMiddle.current.style.transform = `translate3d(0.00168px, 7px, 0px) scale3d(1, 1, 1) rotateX(16deg) rotateY(-25deg) rotateZ(7deg) skew(0deg, 0deg)`;
                cardBotLeft.current.style.transform = `translate3d(32%, -8%, 0px) scale3d(1, 1, 1) rotateX(16deg) rotateY(-25deg) rotateZ(7deg) skew(0deg, 0deg)`;
                cardBotRight.current.style.transform = `translate3d(-5%, -6%, 0px) scale3d(1, 1, 1) rotateX(16deg) rotateY(-25deg) rotateZ(7deg) skew(0deg, 0deg)`;
            } else if (endY > lastY) {
                cardsArray.map((item) => {
                    item.current.style.transform = 'translate3d(0, 0, 0) rotateX(0) rotateY(0) rotateZ(0) skew(0deg, 0deg)';
                })                
            }
            // Atualizar a última posição Y
            lastY = endY;
        }, false);
      });

    return(
        <div className='cards-banner'>
            <div className='cards-up'>
                <img className='PageWebflowVector' src='images/cards/PageWebflowVector.svg' alt='icone de cartão ' ref={cardTopLeft}></img>
                <img className='PageSectionVector' src='images/cards/PageSectionVector.svg' alt='icone de cartão' ref={cardTopRight}></img>
            </div>
            <div className='cards-middle' ref={cardMiddle}>
                <img className='PageDesktopVector' src='images/cards/PageDesktopVector.svg' alt=''></img>
            </div>
            <div className='cards-down'>
                <CardLeft cardBotLeft={cardBotLeft} ></CardLeft>
                <CardRight cardBotRight={cardBotRight} ></CardRight>
            </div>
        </div>
    )
}