interface GameStatsProps {
  moves: number;
  time: number;
}

export default function GameStats({ moves, time }: GameStatsProps) {
  return (
    <div
      style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        color: "#30475E",
        fontWeight: "bold",
      }}
    >
      <div>★ Time: {time}s</div>
      <div>★ Moves: {moves}</div>
    </div>
  );
}
