import React from 'react';
import * as styled from "./style";
import {Props} from "./interface";

const Description: React.FC<Props> = ({
  marginLeft,
  text,
  fontSize,
}) => {
  return (
    <styled.Description
      marginLeft={marginLeft}
      fontSize={fontSize}
    >
      {text}
    </styled.Description>
  )
};

export default Description;
