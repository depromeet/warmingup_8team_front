import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as pages from './pages';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/chat' component={pages.Chat} />
          <Route exact path='/' component={pages.LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
