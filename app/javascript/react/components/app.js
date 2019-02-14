import React from 'react'
import {Route, browserHistory, IndexRoute, Router} from 'react-router';
import PrescriptionShowContainer from '../containers/PrescriptionShowContainer';
import MedicationContainer from '../containers/MedicationContainer';


export const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={MedicationContainer} />
        <Route path='/prescriptions' component={PrescriptionShowContainer} />
    </Router>
  );
}

export default App;
