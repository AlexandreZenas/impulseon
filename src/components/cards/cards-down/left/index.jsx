import './index.css';

export function CardLeft({cardBotLeft}){
    return(
        <div className='left-card' ref={cardBotLeft}>
            <div className='screenColor'>
                <div className='Screen-Color'></div>
                <div>
                    <p><span>Clique </span>nas paletas de cores para mudar a  tela a cima</p>
                </div>
            </div>
            <div className='phoneCard'>
                <img src='images/cards/cards-down/left/phone.svg' alt=''></img>
                <div className='select-color'>
                    <img src='images/cards/cards-down/left/Vector-cinza.svg' alt=''></img>
                    <img src='images/cards/cards-down/left/Vector-branco.svg' alt=''></img>
                    <img src='images/cards/cards-down/left/Vector-rosa.svg' alt=''></img>
                    <img src='images/cards/cards-down/left/Vector-roxo.svg' alt=''></img>
                    <img src='images/cards/cards-down/left/Vector-laranja.svg' alt=''></img>
                    <img src='images/cards/cards-down/left/Vector-ciano.svg' alt=''></img>
                    <img src='images/cards/cards-down/left/Vector-add.svg' alt=''></img>
                </div>
            </div>
            <img className='PageIlustrateVector' src='images/cards/pageIlustrateVector.svg' alt=''></img>
        </div>
    )
}