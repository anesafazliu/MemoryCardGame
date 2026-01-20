import { useNavigate } from "react-router-dom";
import {
  StyledBakckGroundDiv,
  StyledDescription,
  StyledButton,
  StyledHomeContainer,
  StyledTitle,
} from "../styles/HomeStyles";

export default function Home() {
  const navigate = useNavigate();

  return (
    <StyledHomeContainer>
      <StyledBakckGroundDiv>
        <StyledTitle>Memory Match</StyledTitle>
        <StyledDescription>
          <p>
            Match all pairs of cards to win.
            <br />
            Click two cards at a time to find a pair. Matching cards stay face
            up.
            <br />
            Each pair you flip counts as one move.
            <br />
            Your time is tracked, try to finish faster!
            <br />
            Cards shuffle after you win or reset.
            <br />
            Remember card positions to reduce moves.
            <br />
            <b>Tips to Win:</b>
            <br />
            Focus on remembering where cards are when they flip back.
            <br />
            Start with one section at a time to find pairs faster.
            <br />
          </p>

          <p> Ready to start?</p>
        </StyledDescription>
      </StyledBakckGroundDiv>
      <StyledButton onClick={() => navigate("/game")}>Start Game</StyledButton>
    </StyledHomeContainer>
  );
}
