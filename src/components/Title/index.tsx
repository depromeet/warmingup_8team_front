import React from 'react';
import * as styled from "./style";
import {Props} from "./interface";

const Title: React.FC<Props> = ({
  marginTop,
  text,
  fontSize,
  fontWeight,
  color
}) => {
  return (
    <styled.Title
      marginTop={marginTop}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
    >
      {text}
    </styled.Title>
  )
};

export default Title;
