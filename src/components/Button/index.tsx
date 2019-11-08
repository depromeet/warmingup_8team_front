import React from 'react';
import * as styled from "./style";
import {Props} from "./interface";
import {Link} from "react-router-dom";

const Button:React.FC<Props> = ({
  disabled,
  bold,
  borderRadius,
  fontSize,
  height,
  width,
  margin,
  text,
  color,
  background,
  cursor,
  onClick,
  hover,
  active,
}) => {
  return (
    <styled.Button
      disabled={disabled}
      bold={bold}
      borderRadius={borderRadius}
      fontSize={fontSize}
      height={height}
      width={width}
      margin={margin}
      color={color}
      background={background}
      cursor={cursor}
      onClick={onClick}
      hover={hover}
      active={active}
    >
      {text}
    </styled.Button>
  )
};

export default Button;
