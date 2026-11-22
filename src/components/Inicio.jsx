import './Inicio.css'
import Kabuto from '../imgs/kabuto.gif'

function Inicio(){

    return(

        <div className='inicio_'>
            <img src={Kabuto}/>
            <label>
                <h1>OLÁ 👋</h1><br/>
                <p>Seja bem-vindo ao Onigiri Shop.</p>
            </label>
        </div>
    )
};

export default Inicio;