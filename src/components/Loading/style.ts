import styled from "styled-components";

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const Loader = styled.span`
  width: calc(100px - 24px);
  height: 50px;
  position: relative;
  animation: flippx 2s infinite linear;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    transform-origin: -24px 50%;
    animation: spin 1s infinite linear;
  }
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  @keyframes flippx {
    0%,
    49% {
      transform: scaleX(1);
    }
    50%,
    100% {
      transform: scaleX(-1);
    }
  }
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
