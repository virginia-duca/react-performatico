import styled, { keyframes } from "styled-components";

const meteorAnimation = keyframes`
  0% {
    opacity: 1;
    margin-top: -300px;
    margin-right: -300px;
  }
  12% {
    opacity: 0;
  }
  15% {
    margin-top: 300px;
    margin-left: -600px;
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const ShowerContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
  z-index: 2;
  background: transparent;
`;

export const Star = styled.div<{ left: number; top: number }>`
  position: absolute;
  width: 1px;
  height: 1px;
  background: #fff;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  opacity: 0.8;
`;

export const Meteor = styled.div<{
  left: number;
  top: number;
  duration: number;
}>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}vw;
  width: 300px;
  height: 1px;
  transform: rotate(-45deg);
  background-image: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
  animation: ${meteorAnimation} ${({ duration }) => duration}s linear infinite;

  &::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 5px;
    border-radius: 50%;
    margin-top: -2px;
    background: rgba(255,255,255,0.7);
    box-shadow: 0 0 15px 3px #fff;
  }
`;

