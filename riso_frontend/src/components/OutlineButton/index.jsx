import React from "react";
import PropsTypes from "prop-types";
import { Button } from "./styled";

function OutlineButton({children, onClick}) {
  return (
    <Button onClick={onClick}>{children}</Button>
  );
};

OutlineButton.propsTypes = {
  children: PropsTypes.node.isRequired,
  onClick: PropsTypes.func,
}

export default OutlineButton;