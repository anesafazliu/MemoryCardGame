import { StyledButton } from "../styles/HomeStyles";

interface FinishScreenProps {
  time: number;
  moves: number;
  onRestart: () => void;
}

export default function FinishScreen({
  time,
  moves,
  onRestart,
}: FinishScreenProps) {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#30475E",
        padding: "30px 40px",
        borderRadius: "12px",
        textAlign: "center",
        fontWeight: "bold",
        zIndex: 100,
        boxShadow: "0px 0px 20px rgba(0,0,0,0.3)",
      }}
    >
      You matched them all!
      <div style={{ marginTop: "10px" }}>Time spent: {time}s</div>
      <div>Moves: {moves}</div>
      <StyledButton onClick={onRestart}>Restart Game</StyledButton>
    </div>
  );
}
