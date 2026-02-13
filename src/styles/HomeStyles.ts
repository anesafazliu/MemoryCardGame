import styled from "styled-components";

export const StyledHomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  color: black;
`;

export const StyledButton = styled.button`
  padding: 12px 24px;
  background-color: #f05454;
  color: #f5f5f5;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(240, 84, 84, 0.4);

  &:hover {
    background-color: #ff6b6b;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const StyledBakckGroundDiv = styled.div`
  width: 600px;
  height: 60vh;
  background-color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const StyledTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #30475e;
`;
export const StyledDescription = styled.p`
  font-size: 1.2rem;
  color: #121212;
`;
