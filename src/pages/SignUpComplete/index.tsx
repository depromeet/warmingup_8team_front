import React from 'react';
import * as styled from "./style";
import Header from "../../components/Header";

const SignUpComplete:React.FC = _ => {

  return (
    <styled.SignUpComplete>
      <Header/>

      <styled.Title>
        회원가입 완료
      </styled.Title>
      <styled.Content>
        지금바로 가족들과 대화할<br/>
        KKIROOK CHAT 방을 시작만들어보세요!
      </styled.Content>
      
      <styled.Button>
        서비스로 이동  
      </styled.Button>
      <styled.Button>
        채팅방 생성하기
      </styled.Button>
    </styled.SignUpComplete>
  )
};

export default SignUpComplete;
