import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as styled from './style';
import axios from 'utils/axios';
import Routes from 'routes';
import { login } from 'store/reducers/user';
import { ClientSocket } from "utils/socket";

const env: string = process.env.NODE_ENV || 'development';
const host = env === 'production' ? 'http://13.209.142.68:5000' : 'http://localhost:5000';

const App: React.FC = () => {
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
      <ClientSocket url={host}>
        <Routes />
      </ClientSocket>
    </styled.Wrapper>
  );
};

export default App;
