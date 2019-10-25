import React from 'react';
import { KakaoLogin, Header } from 'components';
import * as styled from "./style";
import {useHistory} from "react-router-dom";

const LandingPage:React.FC = _ => {
  let history = useHistory();

  return (
    <styled.LandingPage>
      <Header/>

      <styled.Logo/>
      <styled.Title>
        타이틀 텍스트
      </styled.Title>

      <styled.Content>
        목숨을 인생을 수 영락과 청춘이 옷을 발휘하기 사막이다.<br/>
        불러 청춘은 뛰노는 능히 든 위하여서. 보이는 작고 아니한 청춘 뜨거운지라, 오아이스도 어디 것이다.<br/>
        인간에 때에, 눈에 사막이다. 이 그들은 없으면 말이다.
      </styled.Content>
      <KakaoLogin
        onSuccess={() => history.push('/sign-up-complete')}
        onFailure={() => {}}
      />
    </styled.LandingPage>
  );
};

export default LandingPage;
