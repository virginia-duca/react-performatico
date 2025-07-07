import React, { useState} from "react";
import { SidebarContainer, SidebarContent, Overlay, MenuButton, MenuItem } from "./style";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  children: any
}

interface MenuProp {
  setOpen: (arg0: boolean) => void;
  open: boolean
}

 const Sidebar: React.FC<SidebarProps> = ({ open, onClose, children }) => (
  <>
    <SidebarContainer $open={open}>
      <SidebarContent>
        {/* <button onClick={onClose} style={{ marginBottom: 32 }}>Fechar ✖</button> */}
        {children}
      </SidebarContent>
    </SidebarContainer>
    {open && <Overlay onClick={onClose} />}
  </>
);

 const SidebarMenuButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
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
      {/* ...restante do seu conteúdo */}
    </>
  );
}

export default Menu


