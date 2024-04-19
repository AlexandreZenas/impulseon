import './index.css';

export function Footer() {
    return(
        <footer id='Footer'>
            <div className='container-1140px container-footer'>
                <div className='wrapper-span'>
                    <span>Serviços</span>
                    <span>Projetos</span>
                    <span>Contato</span>
                    <span>FAQ</span>
                </div>
                <div className='wrapper-logo'>
                    <h1>ImpulseOn</h1>
                    <p>© Copyright 2024  ImpulseOn All Rights Reserved</p>
                </div>
                <div className='wrapper-socialMedias'>
                    <img src="icons/footer/facebook-icon.svg" alt="" />
                    <img src="icons/footer/instagram-icon.svg" alt="" />
                    <img src="icons/footer/whatsapp-icon.svg" alt="" />
                </div>
            </div>
        </footer>
    )
}