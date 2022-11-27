import React from "react";
import * as C from "./styles";

interface buttonProps {
  Text: string;
  onClick: () => void;
}

const Button = ({ Text, onClick }:buttonProps) => {
  return (
    <C.Button  onClick={onClick}>
      {Text}
    </C.Button>
  );
};

export default Button;
