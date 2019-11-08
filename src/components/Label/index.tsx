import React from 'react';
import * as styled from "./style";
import {Props} from "./interface";

const Label: React.FC<Props> = ({
  text,
  fontSize,
}) => {
  return (
    <styled.Label
      fontSize={fontSize}
    >
      {text}
    </styled.Label>
  )
};

export default Label;
