import styled from "styled-components";

interface SectionProps {
  $bgUrl?: string;
}

export const FotoSection = styled.section<SectionProps>`
  width: 100vw;
  height: 100vh;
  background-image:
    /* linear-gradient(
      to top,
      rgba(0, 0, 0, 0.98) 0%,
      rgba(0, 0, 0, 0.8) 40%,
      rgba(0, 0, 0, 0.4) 100%
    ), */ ${({ $bgUrl }) => {
    if ($bgUrl) return `url(${$bgUrl})`;
    return "none";
  }};
  background-repeat: no-repeat;
  background-size: 60% 60%;
  background-color: black;
  background-position: center;
  color: #fff;
`;

export const SectionContainer = styled.div`
  height: 100%;
  width: 100vw;
  background: transparent;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 36px;
  letter-spacing: 10px;
  font-weight: 300;
  margin-top: 50px;
  text-align: center;
  .bolder {
    font-weight: 800;
  }
`

export const CardsContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`

export const Gradient = styled.div`
  background: hsla(0, 0%, 0%, 1);

  background: linear-gradient(
    90deg,
    hsla(0, 0%, 0%, 1) 0%,
    hsla(190, 84%, 17%, 1) 38%,
    hsla(0, 0%, 0%, 1) 82%
  );

  background: -moz-linear-gradient(
    90deg,
    hsla(0, 0%, 0%, 1) 0%,
    hsla(190, 84%, 17%, 1) 38%,
    hsla(0, 0%, 0%, 1) 82%
  );

  background: -webkit-linear-gradient(
    90deg,
    hsla(0, 0%, 0%, 1) 0%,
    hsla(190, 84%, 17%, 1) 38%,
    hsla(0, 0%, 0%, 1) 82%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#000000", endColorstr="#07424E", GradientType=1 );
`;
