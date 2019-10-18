import React from 'react';
import * as styled from "./style";
import {Props} from "./interface";
import {Link} from "react-router-dom";

const Button:React.FC<Props> = ({
  bold,
  borderRadius,
  fontSize,
  height,
  width,
  margin,
  text,
  path,
  handleClick,
}) => {
  return (
    path?
    <Link to={path}>
      <styled.Button
        bold={bold}
        borderRadius={borderRadius}
        fontSize={fontSize}
        height={height}
        width={width}
        margin={margin}
        onClick={handleClick}
        >
        {text}
      </styled.Button>
    </Link>
      :
    <styled.Button
      bold={bold}
      borderRadius={borderRadius}
      fontSize={fontSize}
      height={height}
      width={width}
      margin={margin}
      onClick={handleClick}
    >
      {text}
    </styled.Button>
  )
};

export default Button;
