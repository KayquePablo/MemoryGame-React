import React, { useEffect, useState } from 'react'
import GameBoard from './GameBoard';
import GameOver from './GameOver';
import game from '../game';

export default function MemoryGame() {

    const [gameOver, setGameOver] = useState(false);

    const [cards, setCards] = useState([]); //cartas do jogo que se inicia vazia

    useEffect(() => {
        setCards(game.createCardsFromTechs());
    }, [])

    function restart() {
        game.clearCards();
        setCards(game.createCardsFromTechs());
        setGameOver(false);
    }

    function handleFlip(card) {

        game.flipCard(card.id, () => {
            //GameOverCallBack
            setGameOver(true);
        }, () => {
            //NoMathCallBack 
            setCards([...game.cards]);
        });

        setCards([...game.cards]);
    }

    return (
        <div>
            <GameBoard handleFlip={handleFlip} cards={cards} />
            <GameOver show={gameOver} handleRestart={restart} />
        </div>
    )
}
