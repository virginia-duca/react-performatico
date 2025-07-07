import styled from "styled-components";

interface SectionProps {
  $bgUrl?: string;
}

export const Card = styled.div<SectionProps>`
  background-image:
    linear-gradient(
      to top,
      rgba(0, 0, 0, 0.98) 0%,
      rgba(0, 0, 0, 0.8) 40%,
      rgba(0, 0, 0, 0.4) 100%
    ),
    ${({ $bgUrl }) => {
      if ($bgUrl) return `url(${$bgUrl})`;
      return "none";
    }};
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  padding: 30px;
  box-sizing: border-box;
  cursor: pointer;

  .card-title {
    letter-spacing: 10px;
    font-size: 26px;
    font-weight: 700;
    margin: 0;
  }

  .description {
    letter-spacing: 3px;
    font-size: 12px;
    font-weight: 500;
  }

  .colum {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
