import './Sobre.css'

function Sobre(props){

    return(
        <div className="sobre_">
            <div className='sushiplaceholder_'>
                <img src={props.img} alt="Sushi" className='sushi'/>
            </div>
            
            <div className='titulo_'>
                <label className='titulo'>
                    <h1>QUEM SOMOS</h1><br/>
                    <p>Somos um restaurante de sushis e temakeria<br/>
                    existente desde 2015.</p><br/>
                    <p>Nosso catálogo e contato pode ser encontrado abaixo.<br/>
                    Nossas redes sociais ou números de telefone são estes<br/>
                    Qualquer outro número que não esteja aqui é fraude.</p>
                    </label>
            </div>
            
        </div>
    )
};

export default Sobre;