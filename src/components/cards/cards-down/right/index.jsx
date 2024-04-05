import './index.css';

export function CardRight(){
    return(
        <div className='right-card'>
            <div className='screenImage'>
                <img className='screenImageImg' src='images/cards/cards-down/right/ScreenVector.svg' alt=''></img>
            </div>
            <div className='componentsList'>
                {/* style='padding-top: 6%;' */}
                <img  src='images/cards/cards-down/right/IntroductionVector.svg' alt=''></img>
                <img src='images/cards/cards-down/right/WebStructureVector.svg' alt=''></img>
                <img src='images/cards/cards-down/right/ElementbasicsVector.svg' alt=''></img>
                <img src='images/cards/cards-down/right/ComponentsVector.svg' alt=''></img>
                <img src='images/cards/cards-down/right/StyleBasics.svg' alt=''></img>
                <img src='images/cards/cards-down/right/LayoutVector.svg' alt=''></img>
                <img src='images/cards/cards-down/right/ResponsiveDesignVector.svg' alt=''></img>
            </div>
            <img className='PageItensVector' src='images/cards/PageItensVector.svg' alt=''></img>
        </div>
    )
}