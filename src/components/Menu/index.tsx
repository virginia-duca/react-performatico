import React, { useState } from "react";
import {
  SidebarContainer,
  SidebarContent,
  Overlay,
  MenuButton,
  MenuItem,
} from "./style";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

interface MenuButtonProps {
  onClick: () => void;
}

const Sidebar = ({ open, onClose, children }: SidebarProps) => (
  <>
    <SidebarContainer $open={open}>
      <SidebarContent>
        {children}
      </SidebarContent>
    </SidebarContainer>
    {open && <Overlay onClick={onClose} />}
  </>
);

const SidebarMenuButton = ({ onClick }: MenuButtonProps) => (
  <MenuButton onClick={onClick}>☰</MenuButton>
);

const Menu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <SidebarMenuButton onClick={() => setSidebarOpen(true)} />

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)}>
        <MenuItem to="/">Início</MenuItem>
        <MenuItem to="/missoes">Missões</MenuItem>
        <MenuItem to="/asteroides">Asteroides</MenuItem>
        <MenuItem to="/galeria">Galeria</MenuItem>
      </Sidebar>
    </>
  );
};

export default Menu;
