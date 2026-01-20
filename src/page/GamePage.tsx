import GameBoard from "../components/GameBoard";

export default function GamePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 0,
        padding: 10,
      }}
    >
      <GameBoard />
    </div>
  );
}
