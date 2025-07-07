import styled from "styled-components";
import { PALLETE } from "../../config/config";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.aside<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  height: 100vh;
  background: ${PALLETE.dark};
  box-shadow: 2px 0 16px rgba(0, 0, 0, 0.2);
  transform: translateX(${(props) => (props.$open ? "0" : "-100%")});
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  /* border-radius: 10px; */
  /* margin: 10px; */
  padding: 32px 16px;
  box-sizing: border-box;
  border: 1px solid ${PALLETE.grey};
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 60px 0px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background: rgba(0, 0, 0, 0.4); */
  z-index: 1000;
`;

export const MenuButton = styled.button`
  position: fixed;
  border: 1px solid ${PALLETE.grey};
  top: 24px;
  left: 24px;
  z-index: 1100;
  background: ${PALLETE.dark};
  color: #fff;
  border-radius: 8px;
  font-size: 2rem;
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    border: 1px solid ${PALLETE.white};
    color: ${PALLETE.white};
  }
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); */
`;

export const MenuItem = styled(Link)`
  font-size: 20px;
  color: ${PALLETE.white};
  letter-spacing: 3px;
  padding: 10px;
  &:hover {
    background-color: ${PALLETE.grey};
    color: ${PALLETE.white};
  }
`;
