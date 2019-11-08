import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Header } from 'modules';
import * as pages from 'pages';
import Route from './Route';
import Footer from "../modules/Footer";

const Routes:React.FC = _ => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={pages.Home} loginRequired={false} />
        <Route path='/sign-up-complete' component={pages.SignUpComplete} />
        <Route path='/create-chat' component={pages.CreateChat} />
        <Route path='/create-chat-complete' component={pages.CreateChatComplete} />
        <Route path='/list' component={pages.ChatList} />
        <Route path='/chat' component={pages.ChatRoom} />
        <Route path='/question' component={pages.Question} />
        <Route path='/custom-question' component={pages.CustomQuestion} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
