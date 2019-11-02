import React from 'react';
import * as styled from './style';
import { Props } from './interface';
import { Message, ImageMessage, Avatar } from 'components';
import { convertMesssageTime } from 'utils/datetime';

const Chat: React.FC<Props> = ({
  sender = false,
  text,
  name,
  thumbnail_url,
  created_at,
}) => {
  return (
    <styled.Wrapper sender={sender}>
      {
        !sender ? (
          <styled.AvatarContainer>
            <Avatar url={thumbnail_url} />
          </styled.AvatarContainer>
        ) : (
          <styled.Time sender={sender}>
            {convertMesssageTime(created_at)}
          </styled.Time>
        )
      }
      <styled.MessageContainer sender={sender}>
        <styled.MessageHeader sender={sender}>
          {
            !sender ? (
              <styled.User>
                {name}
              </styled.User>
            ) : null
          }
        </styled.MessageHeader>
        
        {
          text ? (
            <Message
              message={text}
              sender={sender}
            />
          ) : (
            <ImageMessage
              url={''}
              sender={sender}
            />
          )
        }

      </styled.MessageContainer>
      
      {
        !sender ? (
          <styled.Time sender={sender}>
            {convertMesssageTime(created_at)}
          </styled.Time>
        ) : null
      }
    </styled.Wrapper>
  );
};

export default Chat;
