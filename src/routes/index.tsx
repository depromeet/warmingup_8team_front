import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as pages from 'pages';
import Route from './Route';

const Routes:React.FC = _ => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={pages.LandingPage} />
        <Route path='/sign-up-complete' component={pages.SignUpComplete} />
        <Route path='/create-chat' component={pages.CreateChat} />
        <Route path='/create-chat-complete' component={pages.CreateChatComplete} />
        <Route path='/list' component={pages.ChatList} />
        <Route path='/chat' component={pages.ChatRoom} />
        <Route path='/question' component={pages.Question} />
      </Switch>
    </Router>
  );
};

export default Routes;
