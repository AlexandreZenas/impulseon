import './index.css';

export function Footer() {
    return(
        <footer id='Footer'>
            <div className='container-1140px container-footer'>
                <div className='wrapper-span'>
                    <a href="/#Steps"><span>Serviços</span></a>
                    <a href="/#Models"><span>Projetos</span></a>
                    <a href="/https://wa.me/5521986465148"><span>Contato</span></a>
                    <a><span>FAQ</span></a>
                </div>
                <div className='wrapper-logo'>
                    <h1>ImpulseOn</h1>
                    <p>2024 © ImpulseOn. Todos os direitos reservados</p>
                </div>
                <div className='wrapper-socialMedias'>
                    <a href=""><img src="icons/footer/facebook-icon.svg" alt="" /></a>
                    <a href="https://www.instagram.com/impulseonagency/"><img src="icons/footer/instagram-icon.svg" alt="" /></a>
                    <a href="https://wa.me/5521986465148"><img src="icons/footer/whatsapp-icon.svg" alt="" /></a>
                </div>
            </div>
        </footer>
    )
}