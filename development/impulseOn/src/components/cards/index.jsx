import './index.css';
import { CardLeft } from './cards-down/left';
import { CardRight } from './cards-down/right';

export function Cards(){
    return(
        <div className='cards-banner'>
            <div className='cards-up'>
                <img className='PageWebflowVector' src='images/cards/PageWebflowVector.svg' alt='icone de cartão '></img>
                <img className='PageSectionVector' src='images/cards/PageSectionVector.svg' alt='icone de cartão'></img>
            </div>
            <div className='cards-middle'>
                    <img className='PageDesktopVector' src='images/cards/PageDesktopVector.svg' alt=''></img>
            </div>
            <div className='cards-down'>
                    <CardLeft></CardLeft>
                    <CardRight></CardRight>
                </div>
        </div>
    )
}