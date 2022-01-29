import React, { useEffect, useState } from 'react'
import GameBoard from './GameBoard';
import GameOver from './GameOver';
import game from '../game';

export default function MemoryGame() {

    const [gameOver, setGameOver] = useState(false );

    const [cards, setCards] = useState([]); //cartas do jogo que se inicia vazia

    useEffect(() => {
        setCards(game.createCardsFromTechs());
    },[])

    function restart() {
        game.clearCards();
        setCards(game.createCardsFromTechs());
        setGameOver(false);
    }

    function handleFlip(card) {
        if (game.setCard(card.id)) {

            if (game.secondCard) {
                if (game.checkMatch()) {
                    game.clearCards();
                    if (game.checkGameOver()) {
                        //Game Over
                        setGameOver(true);
                    }
                } else {
                    setTimeout(() => {
                       //No Math
                        game.unflipCards();
                        setCards([...game.cards]);
                    }, 1000);
                }
            }
        }

        setCards([...game.cards]);
    }

  return (
    <div>
        <GameBoard handleFlip={handleFlip} cards={cards}/> 
        <GameOver  show={gameOver} handleRestart={restart} />
    </div>
  )
}
