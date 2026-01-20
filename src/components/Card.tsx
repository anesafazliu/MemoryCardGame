import type { MemoryCardProps } from "../types/CardProps";
import {
  StyledCard,
  StyledCardFront,
  StyledCardBack,
  StyledCardContent,
} from "../styles/CardStyles";

export default function MemoryCard({
  value,
  isFlipped,
  onClick,
}: MemoryCardProps) {
  return (
    <StyledCard onClick={onClick}>
      <StyledCardContent isFlipped={isFlipped}>
        <StyledCardFront />
        <StyledCardBack>{value}</StyledCardBack>
      </StyledCardContent>
    </StyledCard>
  );
}
