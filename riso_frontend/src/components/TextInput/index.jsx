import React from "react";
import PropTypes from "prop-types";
import { Input } from "./styled";

function TextInput({placeholder, onChange, type}) {
  return (
    <Input placeholder={placeholder} onChange={onChange} type={type}/>
  );
}

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string,
}

export default TextInput;