import React from 'react'
import {Route, browserHistory, IndexRoute, Router} from 'react-router';
import PrescriptionContainer from '../containers/PrescriptionContainer';
import MedicationContainer from '../containers/MedicationContainer';
import LandingPage from './LandingPage';

export const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={LandingPage} />
        <Route path='/medications' component={MedicationContainer} />
        <Route path='/prescriptions' component={PrescriptionContainer} />
    </Router>
  );
}

export default App;
