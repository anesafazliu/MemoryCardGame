import { useState } from "react";
import MemoryCard from "./Card";
import type { CardTypes } from "../types/CardListProp";
import { shuffledInitialCards } from "./CardList";
import GameStats from "./GameStats";
import { useGameStats } from "../hooks/useGameStats";
import FinishScreen from "./FinishScreen";

export default function GameBoard() {
  const [cards, setCards] = useState<CardTypes[]>(shuffledInitialCards);
  const [lock, setLock] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const { moves, incrementMoves, time, stopTimer, resetStats } = useGameStats();

  const handleFirstClick = () => {};
  const handleRestart = () => {
    setCards(
      shuffledInitialCards.map((c) => ({
        ...c,
        isFlipped: false,
        isMatched: false,
      }))
    );
    resetStats();
    setIsFinished(false);
    setLock(false);
  };

  const handleCardClick = (id: number) => {
    if (lock) return;
    const clickedCard = cards.find((c) => c.id === id);
    if (!clickedCard || clickedCard.isFlipped || clickedCard.isMatched) return;

    // Start timer on first click
    if (moves === 0) handleFirstClick();

    // Flip clicked card
    setCards((prev) =>
      prev.map((c) => (c.id === id ? { ...c, isFlipped: true } : c))
    );

    // Find currently flipped cards that aren't matched
    const flippedCards = cards
      .filter((c) => c.isFlipped && !c.isMatched)
      .map((c) => c.id);
    const updatedFlipped = [...flippedCards, id];

    if (updatedFlipped.length === 2) {
      incrementMoves();
      const [firstId, secondId] = updatedFlipped;
      setLock(true);

      setTimeout(() => {
        setCards((prevCards) => {
          const firstCard = prevCards.find((c) => c.id === firstId)!;
          const secondCard = prevCards.find((c) => c.id === secondId)!;

          let newCards;
          if (firstCard.value === secondCard.value) {
            newCards = prevCards.map((c) =>
              c.id === firstId || c.id === secondId
                ? { ...c, isMatched: true }
                : c
            );
          } else {
            newCards = prevCards.map((c) =>
              c.id === firstId || c.id === secondId
                ? { ...c, isFlipped: false }
                : c
            );
          }

          // Check if all matched
          if (newCards.every((c) => c.isMatched)) {
            stopTimer();
            setIsFinished(true);
          }

          return newCards;
        });

        setLock(false);
      }, 1000);
    }
  };

  return (
    <>
      {/* Game stats at top-left */}
      <GameStats moves={moves} time={time} />

      {/* Card grid */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        {cards.map((card) => (
          <MemoryCard
            key={card.id}
            value={card.value}
            isFlipped={card.isFlipped || card.isMatched}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>

      {/* Finishing screen */}
      {isFinished && (
        <FinishScreen time={time} moves={moves} onRestart={handleRestart} />
      )}
    </>
  );
}
