import './Navbar.css'
import logo from '../imgs/onigiri-logo.png'

function Navbar() {

    return(
        <div className="navbar_">
            <div className='logo'>
                <img src={logo}/>
            </div>
            <ul className="apps">
                <a href="#inicio_">Início</a>
                <a href="#sobreNos_">Sobre Nós</a>
                <a href="#produtos_">Produtos</a>
                <a href="#contato_">Contato</a>
                
            </ul>
        </div>
    )
};

export default Navbar;