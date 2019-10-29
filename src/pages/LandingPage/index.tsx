import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { KakaoLogin } from 'components';
import { axios } from 'utils';
import * as styled from "./style";
import { RootState } from 'store/reducers/interface';
import { login } from 'store/reducers/user';

const LandingPage:React.FC = _ => {
  let history = useHistory();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const loginSuccess = async (result: any) => {
    // history.push('/sign-up-complete');
    const { access_token } = result;
    if (access_token) {
      const res = await axios.post('/login', {
        access_token,
      });
      const { data } = res;

      if (data) {
        dispatch(login(data));
      }
    }
  };

  return (
    <styled.LandingPage>
      <styled.Logo/>
      <styled.Title>
        타이틀 텍스트
      </styled.Title>

      <styled.Content>
        목숨을 인생을 수 영락과 청춘이 옷을 발휘하기 사막이다.<br/>
        불러 청춘은 뛰노는 능히 든 위하여서. 보이는 작고 아니한 청춘 뜨거운지라, 오아이스도 어디 것이다.<br/>
        인간에 때에, 눈에 사막이다. 이 그들은 없으면 말이다.
      </styled.Content>

      {
        !isLoggedIn ? (
          <KakaoLogin
            onSuccess={(result) => loginSuccess(result)}
            onFailure={() => {}}
          />
        ) : null
      }
    </styled.LandingPage>
  );
};

export default LandingPage;
