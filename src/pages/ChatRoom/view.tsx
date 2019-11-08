import React, {useEffect, useState} from 'react';
import { Container } from 'components';
import { Chat, Modal } from 'modules';
import { Props as ChatProps } from 'modules/Chat/interface';
import { Props } from './interface';
import * as styled from './style';
import {MemberPlus, Add, Photo} from 'assets';
import {useHistory} from "react-router";
import useModal from "../../utils/useModal";


const View: React.FC<Props> = ({
  title,
  messages,
  onSend,
  input,
  onChange,
  onKeyDown,
  userId,
  chatContent,
  chatKey,
}) => {
  const history = useHistory();
  const {isShowing, toggle} = useModal();

  return (
    <Container style={{
      width: '960px',
      height: '877px',
      boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.12)',
      margin: '127px 480px 136px 480px',
    }}>
      <styled.Nav>
        <styled.TitleWrapper>
          <styled.TitleDot
            src={Add}
            alt={'멤버 추가 버튼'}
            onClick={() => history.goBack()}
          />
          <styled.Title>{title}</styled.Title>
        </styled.TitleWrapper>

        <styled.Add
          src={MemberPlus}
          alt={'멤버 추가 버튼'}
          onClick={toggle}
        >
        </styled.Add>
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
        <styled.UploadButton
          src={Photo}
        />

        <styled.Input
          value={input}
          onChange={(e) => onChange(e)}
          onKeyDown={(e) => onKeyDown(e)}
        />

        <styled.Send onClick={() => onSend()}>입력</styled.Send>
      </styled.InputArea>
      {
        isShowing ? (
          <Modal
            chatKey={chatKey}
            isShowing={isShowing}
            hide={toggle}
          />
        ) : null
      }
      </Container>
  );
};

export default View;
