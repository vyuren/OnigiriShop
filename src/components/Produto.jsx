import "./Produto.css"

function Produto(props){

    return(

        <div className="produto_">
            <img src={props.img} alt={props.nome} />
            <label className="tituloProduto">{props.nome}</label>
            <label className="precoProduto">{props.preco}</label>
            <label className="descricaoProduto">{props.descricao}</label>
        </div>
    )
};

export default Produto;