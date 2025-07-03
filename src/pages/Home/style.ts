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

export const SectionContainer = styled.section`
  height: 100vh;
  width: 100vw;
  background: transparent;
  position: relative;
`;

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
