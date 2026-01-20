import { useState, useEffect } from "react";

export function useGameStats() {
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  const incrementMoves = () => setMoves((m) => m + 1);
  const stopTimer = () => setIsRunning(false);
  const resetStats = () => {
    setMoves(0);
    setTime(0);
    setIsRunning(true);
  };

  return { moves, incrementMoves, time, stopTimer, resetStats };
}
