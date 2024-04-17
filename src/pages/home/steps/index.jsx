import './index.css';
import { ButtonCta } from '../../../components/button-cta';
import { ColorfulBubble } from '../../../components/colorfulBubble';

export function Steps() {

  return (
    <section id='Steps'>
      <ColorfulBubble></ColorfulBubble>
        <div className='container-1140px container-steps'>
            <div className='our-steps'>
                <div className='wrapper-span'>
                  <span>Nossas Etapas </span>
                </div>
                <div className='wrapper-title'>
                  <h1>Veja como a jornada do nosso trabalho é feita.</h1>
                </div>
                <div className='wrapper-text'>
                  <p>Nosso processo é guiado pela transparência e profissionalismo, garantindo que você esteja sempre informado e confiante em nossa parceria.</p>
                </div>
                <ButtonCta></ButtonCta>
            </div>
            <div className='steps-numbering'>
              <div className='steps-content'>
                <div className='numbers'>
                  <span>01.</span>
                </div>
                <div className='wrapper-texts'>
                  <h2>Briefing com o cliente</h2>
                  <p>Nesta etapa, reunimos todas as informações sobre  sua empresa, seu perfil, seu projeto, seu público-alvo e seus concorrentes e levantamos os materiais para o design da marca.</p>
                </div>
              </div>
              <div className='steps-content'>
                <div className='numbers'>
                  <span>02.</span>
                </div>
                <div className='wrapper-texts'>
                  <h2>Desenvolvimento do projeto</h2>
                  <p>Criamos efetivamente o projeto visual, levando em conta todas as informações coletadas até o momento. E após a aprovação do cliente, desenvolvemos o website.</p>
                </div>
              </div>
              <div className='steps-content'>
                <div className='numbers'>
                  <span>03.</span>
                </div>
                <div className='wrapper-texts'>
                  <h2>Campanha de anúncios</h2>
                  <p>Juntos, planejamos anúncios precisos para alcançar seu público-alvo e minimizar custos. Sua mensagem será entregue de forma eficaz, garantindo o melhor retorno sobre o investimento.</p>
                </div>
              </div>

            </div>
        </div>
    </section>
  )
}
