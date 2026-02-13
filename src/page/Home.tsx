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
            Match all pairs to win! <br /> Click two cards at a time—matching
            pairs stay face up. <br /> Each flip counts as a move and your time
            is tracked. <br /> Cards shuffle on reset or win. <br />
            Remember card positions and tackle one section at a time
          </p>
          <p> Ready to start?</p>
        </StyledDescription>{" "}
        <StyledButton onClick={() => navigate("/game")}>
          Start Game
        </StyledButton>
      </StyledBakckGroundDiv>
    </StyledHomeContainer>
  );
}
