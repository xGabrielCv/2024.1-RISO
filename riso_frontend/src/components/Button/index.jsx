import React from "react";
import { FillButton } from "./styled";

function Button(props) {
  return (
    <FillButton onClick={props.onClick}>{props.text}</FillButton>
  );
};

export default Button;