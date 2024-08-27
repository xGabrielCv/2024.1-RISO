import React from "react";
import { Input } from "./styled";

function TextInput(props) {
  return (
    <Input placeholder={props.placeholder} onChange={props.onChange} type={props.type}/>
  );
}

export default TextInput;