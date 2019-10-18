import React, {useState} from 'react';
import * as styled from "./style";
import {Button, Header} from 'components';

const CreateChat:React.FC = _ => {
  const [chatName, setChatName] = useState('');

  const onChangeChatName = (e: React.FormEvent<HTMLInputElement>) => {
    setChatName(e.currentTarget.value);
  };

  return (
    <div>
      <Header/>
      <styled.CreateChat>
        <styled.Title>
          새로운 끼룩 챗 생성하기
        </styled.Title>
        <styled.Description>
          유소년에게서 위하여 그들은 인류의 이상, 것이다. 뛰노는 동력은 무엇이 약동하다.
        </styled.Description>

        <styled.Order>
          1. 채팅방 이름설정
        </styled.Order>
        <styled.NameInput
          value={chatName}
          onChange={onChangeChatName}
        />

        <div>
          <styled.Order>
            2. 아이콘 설정
            <styled.IconDescription>
              ( jpg, png 업로드만 가능합니다. )
            </styled.IconDescription>
          </styled.Order>

        </div>
        <div>
          <styled.IconBox>
            <styled.IconBoxDescription>
              채팅방에 설정하고 싶은 이미지를<br/>
              여기에 끌어다 놓아주세요:)
            </styled.IconBoxDescription>
            <styled.Or>or</styled.Or>
            <Button
              borderRadius={4}
              fontSize={16}
              height={48}
              width={126}
              text={"파일 업로드"}
            />
          </styled.IconBox>
        </div>

        <Button
          bold={true}
          borderRadius={4}
          fontSize={16}
          height={48}
          width={107}
          margin={'67px'}
          text={'시작하기'}
        />
      </styled.CreateChat>
    </div>
  );
};

export default CreateChat;
