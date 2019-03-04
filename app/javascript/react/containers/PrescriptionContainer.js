import React, {Component} from 'react';
import MedicationContainer from './MedicationContainer';
import { browserHistory, Link } from 'react-router';
import PrescriptionTile from '../components/PrescriptionTile';
import PrescriptionShowPage from './PrescriptionShowPage';

class PrescriptionContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
        prescriptions: []
      };
    }
    componentDidMount(){
      fetch(`/api/v1/prescriptions`)
      .then((response) => {
        let responseBody = response.json()
        return responseBody;
      })
      .then(responseBody => {
        this.setState({
      prescriptions: responseBody.prescriptions
        });
      });
    }

  render(){

    let medications = this.state.prescriptions.map(prescription => {
      return(
          <PrescriptionTile
            key={prescription.id}
            id={prescription.id}
            user={prescription.user.id}
            generic={prescription.medication.generic_name}
            brand={prescription.medication.brand_name}
            dosage={prescription.dosage}
            number={prescription.frequency_number}
            period={prescription.frequency_period}
            />
      )
    })


  return(
    <div>
    <h1> Your Medicine Cabinet </h1>
      {medications}
      <PrescriptionTile/>
          <a href="/medications" className="button">Add Another Medication</a>
    </div>
    )
  }
}

export default PrescriptionContainer
