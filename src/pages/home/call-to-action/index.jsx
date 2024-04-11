import './index.css';
import { ButtonCta } from '../../../components/button-cta';
export function  CallToAction() {
  return (
    <section id={`CallToAction`}>
            <div className='container-1140px container-callToAction'>
                <div className='wrapper-span'>
                    <span>EXPERIENCE SMARTER DIGITAL WITH STORM BRAIN</span>
                </div>
                <div className='wrapper-title'>
                    <h1>Mude o Jogo: Impulsione seu negócio além dos limites.</h1>
                </div>
                <ButtonCta></ButtonCta>
            </div>
    </section>
  )

}