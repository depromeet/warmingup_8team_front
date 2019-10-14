import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as styled from './style';
import * as pages from 'pages';

const App:React.FC = () => {
  return (
    <styled.Wrapper>
      <Router>
        <Switch>
          <Route exact path='/chat' component={pages.Chat} />
          <Route exact path='/' component={pages.LandingPage} />
        </Switch>
      </Router>
    </styled.Wrapper>
  );
}

export default App;