import styled from "styled-components";
import { PALLETE } from "../../config/config";

interface CardProp {
  open: boolean
}

export const SectionContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  background: hsla(0, 0%, 0%, 1);
  position: relative;

  .astro-title {
    font-size: 36px;
    letter-spacing: 10px;
    font-weight: 700;
    margin: 50px 0 0 0;
  }
`;


export const Content = styled.div`
  padding: 0 50px 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
`;

export const InfoCard = styled.div<CardProp>`
  min-height: 200px;
  width: 80%;
  padding: 15px;
  background-color: ${PALLETE.dark};
  border: 1px solid ${PALLETE.grey};
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  .row {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: space-evenly;
  }

  .arrow {
    font-size: 40px;
    cursor: pointer;
    will-change: transform;
    transform: ${(props) => (props.open ? 'rotate(-90deg)' : 'rotate(90deg)')};
    transition: all 0.2s ease-in-out;
  }

  p {
    margin: 0
  }

  img {
    width: 100px;
  }

  .description {
    font-size: 18px;
    color: ${PALLETE.white};
  }

  .aster-name {
    font-size: 16px;
    font-weight: 500;
    color: ${PALLETE.white};
  }

  .column {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .collapsible {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    height: ${(props) => {
      if (props.open) return "180px";
      return '0px'
    }};
    width: 100%;
    -webkit-transition: height 0.2s ease-in-out; /* For Safari 3.1 to 6.0 */
    transition: height 0.2s ease-in-out;
    border-top: 1px solid ${PALLETE.grey};
    border-bottom: 1px solid ${PALLETE.grey};
  }
`;
