import './index.css';
import { ButtonCta } from '../../../components/button-cta';
export function About() {
    return(
        <section id='About'>
            <div className='container-992px container-about'>
                <div className='wrapper-title'>
                    <h2><strong>Go</strong>.</h2>
                    
                    <h1>Na <strong className='bold'>ImpulseOn <img src="images/risk-colored.png" alt="" ></img></strong> desafiamos os limites do marketing digital, impulsionando negócios <strong className='gradient'>além das expectativas</strong></h1>
                </div>
                <div className='wrapper-text'>
                    <p>
                    Fundada com uma visão audaciosa e uma paixão pelo digital, a <strong>ImpulseOn</strong> nasceu da união de mentes criativas determinadas a revolucionar o marketing online. Com estratégias inovadoras e uma equipe dedicada, transformando visões em realidade digital. Conecte-se conosco para uma jornada de crescimento e sucesso online. Sua marca merece o impulso certo - <strong>Impulse On, sua parceira digital.</strong>"
                    </p>
                </div>
                <ButtonCta></ButtonCta>
            </div>  
        </section>
    )
}