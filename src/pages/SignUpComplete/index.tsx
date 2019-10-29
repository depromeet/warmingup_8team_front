import React from 'react';
import * as styled from "./style";
import {Button} from 'components';

const SignUpComplete:React.FC = _ => {
  return (
    <styled.SignUpComplete>
      <styled.Title>
        회원가입 완료
      </styled.Title>
      <styled.Content>
        지금바로 가족들과 대화할<br/>
        KKIROOK CHAT 방을 시작만들어보세요!
      </styled.Content>

      <Button
        bold={true}
        borderRadius={4}
        fontSize={16}
        height={48}
        width={140}
        margin={"0 10.5px"}
        text={"서비스로 이동"}
        path={'/chat'}
      />
      <Button
        bold={true}
        borderRadius={4}
        fontSize={16}
        height={48}
        width={140}
        text={"채팅방 생성하기"}
        path={'/create-chat'}
      />
    </styled.SignUpComplete>
  )
};

export default SignUpComplete;
