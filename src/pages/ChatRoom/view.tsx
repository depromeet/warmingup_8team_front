import React from 'react';
import { Container } from 'components';
import { Chat } from 'modules';
import { Props as ChatProps } from 'modules/Chat/interface';
import { Props } from './interface';
import * as styled from './style';

const View: React.FC<Props> = ({
  title,
  messages,
  onSend,
  input,
  onChange,
  onKeyDown,
  userId,
  chatContent,
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

      <styled.Content ref={chatContent}>
        {
          messages.map((m: ChatProps, i: number) => {
            return (
              <Chat
                key={m.id}
                sender={m.user_id === userId}
                name={m.name}
                text={m.text}
                thumbnail_url={m.thumbnail_url}
                created_at={m.created_at}
              />
            );
          })
        }
      </styled.Content>

      <styled.InputArea>
        <styled.UploadButton>

        </styled.UploadButton>

        <styled.Input
          value={input}
          onChange={(e) => onChange(e)}
          onKeyDown={(e) => onKeyDown(e)}
        />

        <styled.Send onClick={() => onSend()}>입력</styled.Send>
      </styled.InputArea>
    </Container>
  );
};

export default View;
