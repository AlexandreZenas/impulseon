import './index.css';
import { Cards } from '../../../components/cards';
import { ColorfulBubble } from '../../../components/colorfulBubble';
function Banner() {
    return(
        <section id='Banner'>
            <ColorfulBubble></ColorfulBubble>
            <div className='bgPoints'>
                <img src="images/bg.svg" alt="pontos flutuantes" />
            </div>
            <div className='container-992px banner-container'>
                <div className='titles-banner'>
                    <div><h1>Agência digital<br></br><span>ImpulseOn</span></h1></div>
                    <div>
                        <p>Especializados em desenvolvimento de sites e anúncios para internet. </p>
                    </div>
                </div>
                <Cards></Cards>
            </div>
        </section>
    )
}

export default Banner; 