import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { KakaoLogin } from 'components';
import { axios } from 'utils';
import * as styled from "./style";
import { RootState } from 'store/reducers/interface';
import { login } from 'store/reducers/user';

const LandingPage: React.FC = _ => {
  let history = useHistory();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const loginSuccess = async (result: any) => {
    const { access_token } = result;
    if (access_token) {
      const res = await axios.post('/login', {
        access_token,
      });
      const { data } = res;

      if (data) {
        dispatch(login(data));
        history.push('/sign-up-complete');
      }
    }
  };

  return (
    <styled.LandingPage>
      <styled.Logo />
      <styled.Title>
        멀리 있는 가족과 가까워질 시간
      </styled.Title>

      <styled.Content>
        이야기할 상대가 부족하거나 힘들거나 우울하거나 우리 끼룩챗
        아이고 잘한다 멋지다 행복하다 끝내고싶다아
      </styled.Content>

      {
        !isLoggedIn ? (
          <KakaoLogin
            onSuccess={(result) => loginSuccess(result)}
            onFailure={() => { }}
          />
        ) : null
      }
    </styled.LandingPage>
  );
};

export default LandingPage;
