import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as styled from './style';
import * as pages from 'pages';
import Routes from 'routes';

const App:React.FC = () => {
  return (
    <styled.Wrapper>
      <Routes />
    </styled.Wrapper>
  );
};

export default App;
