import './index.css';

export function Navbar(){


    return(
    <nav id='Navbar'>
        <div className='container-1140px container-navbar'>
            <div className='wrapper-logo'>
                <a href="#Banner"><h1>Impulse</h1> 
                <div className='powerOn'>
                    <div className='On'></div>
                </div>
                <h2>N</h2>
                </a>
            </div>
            <div className='navMenu'>
                <a href="#Steps" >O que a Impulse faz
                    <div></div>
                </a>
                <a href="#Services" >Benefícios
                <div></div>
                </a>
            </div>
        </div>
    </nav>
    )
}