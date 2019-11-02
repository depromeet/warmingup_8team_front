import React from 'react';
import * as styled from "./style";
import {Button} from 'components';

const SignUpComplete:React.FC = _ => {
  return (
    <styled.SignUpComplete>
      <styled.Title>
        가입을 환영합니다!
      </styled.Title>
      <styled.Content>
        지금 바로 KKIROOK CHAT 채팅방을 만들어<br/>
        가족들과 대화해 보세요!
      </styled.Content>

      <Button
        borderRadius={30}
        fontSize={16}
        height={62}
        width={230}
        margin={"0 12px"}
        text={"채팅방 리스트"}
        path={'/list'}
        color={'#5057ef'}
      />
      <Button
        bold={true}
        borderRadius={30}
        fontSize={16}
        height={62}
        width={230}
        text={"채팅방 만들기"}
        path={'/create-chat'}
        color={'white'}
        background={'#5057ef'}
      />
    </styled.SignUpComplete>
  )
};

export default SignUpComplete;
