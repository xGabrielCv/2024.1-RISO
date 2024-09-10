import React from "react";
import PropsTypes from "prop-types";
import { Navegacao, Sair, Titulo } from "./styled";

function NavBar({onClick, children, text}) {

  return (
    <Navegacao>
      <Titulo>RISO</Titulo>
      {children}
      <Sair onClick={onClick}>{text}</Sair>
    </Navegacao>
  );
}

NavBar.propsTypes = {
  children: PropsTypes.node,
  onClick: PropsTypes.func.isRequired,
  text: PropsTypes.string.isRequired,
}

export default NavBar;