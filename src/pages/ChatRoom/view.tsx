import React from 'react';
import { Container } from 'components';
import { Chat } from 'modules';
import { Props as ChatProps } from 'modules/Chat/interface';
import { Props } from './interface';
import * as styled from './style';

const View: React.FC<Props> = ({
  title,
  messages,
}) => {
  return (
    <Container style={{
      height: '100vh',
    }}>
      <styled.Nav>
        <styled.TitleWrapper>
          <styled.TitleDot />
          <styled.Title>{title}</styled.Title>
        </styled.TitleWrapper>

        <styled.Add></styled.Add>
      </styled.Nav>

      <styled.Content>
        {
          messages.map((m: ChatProps, i: number) => {
            return (
              <Chat
                username={m.username}
                message={m.message}
                sender={m.sender}
                image={m.image}
                timestamp={m.timestamp}
              />
            );
          })
        }
      </styled.Content>

      <styled.InputArea>
        <styled.UploadButton>

        </styled.UploadButton>

        <styled.Input />

        <styled.Send>입력</styled.Send>
      </styled.InputArea>
    </Container>
  );
};

export default View;
