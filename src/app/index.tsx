import React, { useEffect } from 'react';
import * as styled from './style';
import { Header } from 'modules';
import axios from 'utils/axios';
import Routes from 'routes';

const App:React.FC = () => {
  useEffect(() => {
    // 화면이 첫 진입을 하면 로그인 했는지 체크
    firstLogin();
  }, []);

  const firstLogin = async () => {
    const res = await axios.post('/login');
    console.log(res);
  };

  return (
    <styled.Wrapper>
      <Header />
      <Routes />
    </styled.Wrapper>
  );
};

export default App;
