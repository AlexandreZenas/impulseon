import './index.css';
import { Cards } from '../../../components/cards';
import { ColorfulBubble } from '../../../components/colorfulBubble';
import { ButtonCta } from '../../../components/button-cta';
function Banner() {
    return(
        <section id='Banner'>
            <ColorfulBubble></ColorfulBubble>
            <div className='bgPoints'>
                <img src="images/bg.svg" alt="pontos flutuantes" />
            </div>
            <div className='container-1140px banner-container'>
                <div className='titles-banner'>
                    <div>
                        <h1>Quer aumentar seus <strong className='gradient'>clientes</strong> e ser o negócio mais conhecido <strong className='gradient'>em sua região</strong> ?</h1>
                    </div>
                    <div>
                        <p>Somos a agência certa para te ajudar !</p>
                    </div>
                    <ButtonCta></ButtonCta>
                </div>
                <Cards></Cards>
            </div>
        </section>
    )
}

export default Banner; 