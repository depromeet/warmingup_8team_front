import React from 'react';
import * as styled from './style';
import { Props } from './interface';
import { Message, ImageMessage, Avatar } from 'components';

const Chat: React.FC<Props> = ({
  sender = false,
  message = '',
  username = '디프만',
  image = '',
  timestamp = '11:30am',
}) => {
  return (
    <styled.Wrapper sender={sender}>
      {
        !sender ? (
          <styled.AvatarContainer>
            <Avatar />
          </styled.AvatarContainer>
        ) : (
          <styled.Time sender={sender}>{timestamp}</styled.Time>
        )
      }
      <styled.MessageContainer sender={sender}>
        <styled.MessageHeader sender={sender}>
          {
            !sender ? (
              <styled.User>{username}</styled.User>
            ) : null
          }
        </styled.MessageHeader>
        
        {
          message ? (
            <Message
              message={message}
              sender={sender}
            />
          ) : (
            <ImageMessage
              url={image}
              sender={sender}
            />
          )
        }

      </styled.MessageContainer>
      
      {
        !sender ? (
          <styled.Time sender={sender}>{timestamp}</styled.Time>
        ) : null
      }
    </styled.Wrapper>
  );
};

export default Chat;
