import Whatsapp from '../imgs/redesSociais/whatsapp.webp'
import Instagram from '../imgs/redesSociais/Instagram.webp'
import Linkedin from '../imgs/redesSociais/linkedin.png'

import './Contato.css'

function Contato(){

    return(

        <div className="contato_">
            <div className="redes">
                <div>
                    <a href="https://instagram.com" target="_blank" aria-label="Instagram">
                        <img src={Instagram}/><br/> <label>Whatsapp</label>
                    </a>
                </div>
                
                <div>
                    <a href="https://whatsapp.com">
                        <img src={Whatsapp}/><br/> <label>Whatsapp</label>
                    </a>
                </div>

                <div>
                    <a href="https://linkedin.com">
                        <img src={Linkedin}/><br/> <label>LinkedIn</label>
                    </a>
                </div>
                
            </div>
        </div>
    )
};

export default Contato;