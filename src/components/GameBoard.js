import React from 'react'
import CardElement from './CardElement'

export default function GameBoard(props) {
    return (
        <div>
            <h1>Jogo da Memória 💬</h1>

            <div id="gameBoard">
                {props.cards.map((card, index) => 
                    <CardElement handleFlip={props.handleFlip} key={index} card={card}/>
                )}
            </div>
        </div>
    )
}
