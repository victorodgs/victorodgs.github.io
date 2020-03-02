import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from 'components/Home';
import ShowJoke from 'components/ShowJoke';

export default props => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/joke/:category" component={ShowJoke} />
    </Switch>
  );
};
