import React from 'react';
import * as styled from "./style";
import {Props} from "./interface";

const Content: React.FC<Props> = ({
  text,
  fontSize,
  fontWeight,
  margin,
}) => {
  const addLineBreaks = (string: string) =>
    string.split('\n').map((text, index) => (
      <React.Fragment key={`${text}-${index}`}>
        {text}
        <br />
      </React.Fragment>
    ));

  return (
    <styled.Title
      margin={margin}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
    {addLineBreaks(text)}
    </styled.Title>
  )
};

export default Content;
