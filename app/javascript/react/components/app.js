import React from 'react'
import {Route, browserHistory, IndexRoute, Router} from 'react-router';
import UserShowContainer from '../containers/UserShowContainer';


export const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path="/" component={UserShowContainer}>
      </Route>
    </Router>
  );
}

export default App;
