import React from "react";
import PropsTypes from "prop-types";
import { Navegacao, Sair, Titulo } from "./styled";

function NavBar({onClick, children}) {

  return (
    <Navegacao>
      <Titulo>RISO</Titulo>
      {children}
      <Sair onClick={onClick}>Sair</Sair>
    </Navegacao>
  );
}

NavBar.propsTypes = {
  children: PropsTypes.node,
  onClick: PropsTypes.func.isRequired
}

export default NavBar;