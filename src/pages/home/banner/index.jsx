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
            <div className='container-1140px banner-container'>
                <div className='titles-banner'>
                    <div>
                        <p>PROCURANDO UMA AGÊNCIA DIGITAL ?</p>
                    </div>
                    <div>
                        <h1>Somos a força que impulsiona sua visibilidade na internet</h1>
                    </div>
                </div>
                <Cards></Cards>
            </div>
        </section>
    )
}

export default Banner; 