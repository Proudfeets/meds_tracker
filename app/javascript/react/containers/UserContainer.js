import React, {Component} from 'react';
import MedicationContainer from './MedicationContainer';
import { browserHistory, Link } from 'react-router';


class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prescriptions: []
    }
  }

  componentDidMount(){
    fetch('/api/v1/prescriptionsController.json')
    .then(response => {
      let prescriptions = response.json()
      return prescriptions
    }).then(prescriptions => {
      this.setState({prescriptions: prescriptions})
    })
  }

  render() {

    let prescriptions = this.state.prescriptions.map(prescription =>{
      return(
        <PrescriptionTile
          key={prescription.id}
          prescription={prescription}
        />
      )
    })

    return(
    <div>
      <h1>"Hello world from User Container"</h1>

    </div>
    );
  }
}
export default UserContainer;
