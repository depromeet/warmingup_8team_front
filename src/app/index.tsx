import React from 'react';
import * as styled from './style';
import { Header } from 'modules';
import Routes from 'routes';

const App:React.FC = () => {
  return (
    <styled.Wrapper>
      <Header />
      <Routes />
    </styled.Wrapper>
  );
};

export default App;
