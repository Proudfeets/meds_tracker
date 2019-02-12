import React, {Component} from 'react';
import MedicationContainer from './MedicationContainer';
import { browserHistory, Link } from 'react-router';

class UserShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state =
    {}
  }
  render() {

    return(
    <div>
      <h1>"Hello world from User Show Container"</h1>
    </div>
    );
  }
}
export default UserShowContainer;
