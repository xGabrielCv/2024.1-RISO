import React from "react";
import { Button } from "./styled";

function OutlineButton(props) {
  return (
    <Button onClick={props.onClick}>{props.text}</Button>
  );
};

export default OutlineButton;