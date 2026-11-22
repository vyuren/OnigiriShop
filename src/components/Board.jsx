import './Board.css'

function Board({ children }){

    return(
        <div className='board_'>
            {children}
        </div>
    )
}

export default Board;