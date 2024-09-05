import React from "react";
import PropTypes from "prop-types";
import { FillButton } from "./styled";

function Button({onClick, children}) {
  return (
    <FillButton onClick={onClick}>{children}</FillButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

export default Button;