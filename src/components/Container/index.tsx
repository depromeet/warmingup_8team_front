import React from 'react';
import { Props } from './interface';
import * as styled from './style';

const Container: React.FC<Props> = ({
  children,
  style,
}) => {
  return (
    <styled.Wrapper style={style}>
      {children}
    </styled.Wrapper>
  );
};

export default Container;
