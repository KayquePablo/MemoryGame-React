import React, { Fragment } from 'react'

export default function GameOver(props) {
  return (props.show?
    <div id="gameOver">
        <div>Parabéns, você completou o Jogo!</div>
        <button id="restart" onClick={props.handleRestart}>Restart Game</button>
    </div> : <Fragment />
  )
}
 