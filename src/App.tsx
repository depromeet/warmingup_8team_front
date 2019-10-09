import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as pages from './pages';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={pages.Chat} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
