import React from 'react';
import * as styled from './style';
import { Props } from './interface';
import { Message, Avatar } from 'components';

const Chat: React.FC<Props> = ({
  sender = false,
  message = '',
  username = '디프만',
  time = '11:30am',
}) => {
  return (
    <styled.Wrapper>
      {
        !sender ? (
          <styled.AvatarContainer>
            <Avatar />
          </styled.AvatarContainer>
        ) : null
      }
      <styled.MessageContainer sender={sender}>
        <styled.MessageHeader sender={sender}>
          {
            !sender ? (
              <styled.User>{username}</styled.User>
            ) : null
          }
          <styled.Time>{time}</styled.Time>
        </styled.MessageHeader>
        
        <Message
          message={message}
          sender={sender}
        />
      </styled.MessageContainer>
    </styled.Wrapper>
  );
};

export default Chat;
