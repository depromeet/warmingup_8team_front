import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as styled from './style';
import { Header } from 'modules';
import axios from 'utils/axios';
import Routes from 'routes';
import { login } from 'store/reducers/user';

const App:React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // 화면이 첫 진입을 하면 로그인 했는지 체크
    firstLogin();
  }, []);

  const firstLogin = async () => {
    const res = await axios.post('/login', {});
    const { data } = res;

    if (data) {
      dispatch(login(data));
    }
  };

  return (
    <styled.Wrapper>
      <Header />
      <Routes />
    </styled.Wrapper>
  );
};

export default App;
