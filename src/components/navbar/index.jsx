import './index.css';

export function Navbar(){


    return(
    <nav id='Navbar'>
        <div className='container-1140px container-navbar'>
            <div className='wrapper-logo'>
                <h1><a href="#Banner">ImpulseOn</a></h1>
            </div>
            <div className='navMenu'>
                <a href="#Steps" >O que a Impulse faz</a>
                <a href="#Services" >Benefícios</a>
            </div>
        </div>
    </nav>
    )
}