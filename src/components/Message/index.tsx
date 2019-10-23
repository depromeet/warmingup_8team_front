import React from 'react';
import * as styled from './style';
import { Props } from './interface';

const Message: React.FC<Props> = ({
  message = '',
  sender = false,
}) => {
  return (
    <styled.Wrapper sender={sender}>
      <styled.Span>{message}</styled.Span>
    </styled.Wrapper>
  );
};

export default Message;
