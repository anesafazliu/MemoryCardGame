import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100px;
  height: 130px;
  margin: 4px;
  perspective: 600px;
  cursor: pointer;
`;

export const StyledCardContent = styled.div<{ isFlipped: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ isFlipped }) =>
    isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border-radius: 8px;
`;

export const StyledCardFront = styled(CardFace)`
  background-color: #f05454;
  color: white;
`;

export const StyledCardBack = styled(CardFace)`
  background-color: #f5f5f5;
  transform: rotateY(180deg);
`;
