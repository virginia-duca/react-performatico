import styled from "styled-components";
import { PALLETE } from "../../config/config";

export const Section = styled.section`
  /* height: 100vh; */
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${PALLETE.black};
  padding: 0 50px 0 100px;
  box-sizing: border-box;

  .mission-title {
    font-size: 36px;
    letter-spacing: 10px;
    font-weight: 700;
  }

`;

export const Table = styled.table`
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid ${PALLETE.grey};
  background-color: ${PALLETE.darkGrey};

  th {
    border: 1px solid white;
    padding: 20px;
    text-align: left;
  }

  td {
    border-bottom: 1px solid white;
    padding: 20px;
    height: 107px;
    box-sizing: border-box;
  }

`

export const Collapsable = styled.div<{ open: boolean }>`
  background: #222;
  color: #fff;
  width: 100%;
  height: ${({ open }) => (open ? '200px' : '0')};
  transition: height 0.25s ease-in-out;
  overflow: hidden;
  border-bottom: 1px solid white;
`;