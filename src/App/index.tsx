import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as styled from './style';
import * as pages from 'pages';

const App:React.FC = () => {
  return (
    <styled.Wrapper>
      <Router>
        <Switch>
          <Route exact path='/' component={pages.LandingPage} />
          <Route exact path='/sign-up-complete' component={pages.SignUpComplete} />
          <Route exact path='/create-chat' component={pages.CreateChat} />
          <Route exact path='/create-chat-complete' component={pages.CreateChatComplete} />
          <Route exact path='/chat' component={pages.Chat} />
        </Switch>
      </Router>
    </styled.Wrapper>
  );
};

export default App;
