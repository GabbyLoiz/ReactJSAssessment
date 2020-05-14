import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './containers/Main';

class App extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Main} />
        </Switch>
      </div>
    );
  }
}

export default App;
