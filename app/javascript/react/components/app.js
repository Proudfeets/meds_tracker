import React from 'react'
import {Route, browserHistory, IndexRoute, Router} from 'react-router';
import UserContainer from '../containers/UserContainer';
import MedicationContainer from '../containers/MedicationContainer';


export const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={UserContainer} />
        <Route path='prescriptions' component={MedicationContainer}>
      </Route>
    </Router>
  );
}

export default App;
