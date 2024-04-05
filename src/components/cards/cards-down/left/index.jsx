import './index.css';

export function CardLeft(){
    return(
        <div className='left-card'>
            <div className='screenColor'>
                <div className='Screen-Color'></div>
                <div>
                    <p><span>Clique </span>nas paletas <br></br> de cores para mudar a <br></br> tela a cima</p>
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