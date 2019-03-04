import React from 'react'
import {Route, browserHistory, IndexRoute, Router} from 'react-router';
import PrescriptionContainer from '../containers/PrescriptionContainer';
import MedicationContainer from '../containers/MedicationContainer';
import LandingPage from './LandingPage';
import PrescriptionShowPage from '../containers/PrescriptionShowPage'

export const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={LandingPage} />
        <Route path='/medications' component={MedicationContainer} />
        <Route path='/prescriptions' component={PrescriptionContainer} />
        <Route path='/prescriptions/:id' component={PrescriptionShowPage} />
    </Router>
  );
}

export default App;
