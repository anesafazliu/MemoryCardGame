import type { CardTypes } from "../types/CardListProp";

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
export const initialCards: CardTypes[] = [
  { id: 1, value: "🦊", isFlipped: false, isMatched: false },
  { id: 2, value: "🐻‍❄️", isFlipped: false, isMatched: false },
  { id: 3, value: "🐭", isFlipped: false, isMatched: false },
  { id: 4, value: "🐰", isFlipped: false, isMatched: false },
  { id: 5, value: "🐻", isFlipped: false, isMatched: false },
  { id: 6, value: "🐵", isFlipped: false, isMatched: false },
  { id: 7, value: "🐶", isFlipped: false, isMatched: false },
  { id: 8, value: "🐵", isFlipped: false, isMatched: false },
  { id: 9, value: "🐰", isFlipped: false, isMatched: false },
  { id: 10, value: "🦊", isFlipped: false, isMatched: false },
  { id: 11, value: "🐱", isFlipped: false, isMatched: false },
  { id: 12, value: "🐶", isFlipped: false, isMatched: false },
  { id: 13, value: "🐼", isFlipped: false, isMatched: false },
  { id: 14, value: "🐻‍❄️", isFlipped: false, isMatched: false },
  { id: 15, value: "🐭", isFlipped: false, isMatched: false },
  { id: 16, value: "🐱", isFlipped: false, isMatched: false },
  { id: 17, value: "🐻", isFlipped: false, isMatched: false },
  { id: 18, value: "🐨", isFlipped: false, isMatched: false },
  { id: 19, value: "🐨", isFlipped: false, isMatched: false },
  { id: 20, value: "🐼", isFlipped: false, isMatched: false },
];
export const shuffledInitialCards = shuffleArray<CardTypes>(initialCards);
