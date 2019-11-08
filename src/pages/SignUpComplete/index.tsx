import React from 'react';
import * as styled from "./style";
import {Button, Content, Title} from 'components';
import { useHistory } from "react-router";

const SignUpComplete: React.FC = _ => {
  let history = useHistory();

  return (
    <styled.SignUpComplete>
      <Title
        text={'가입을 환영합니다!'}
        marginTop={429}
      />
      <Content
        text={
          '지금 바로 끼룩챗 채팅방을 만들어,\n' +
          '가족들과 대화해보세요.'
        }
        margin={'12px 0 64px'}
      />

      <Button
        borderRadius={30}
        fontSize={18}
        height={51}
        width={168}
        margin={"0 12px 365px"}
        text={"채팅방 리스트"}
        color={'#5057ef'}
        onClick={() => history.push('/chat')}
      />
      <Button
        bold={true}
        borderRadius={30}
        fontSize={18}
        height={51}
        width={168}
        text={"채팅방 만들기"}
        color={'white'}
        background={'#5057ef'}
        onClick={() => history.push('/create-chat')}
        hover={'#3a40d4'}
        active={'#2e33ad'}
      />
    </styled.SignUpComplete>
  )
};

export default SignUpComplete;
