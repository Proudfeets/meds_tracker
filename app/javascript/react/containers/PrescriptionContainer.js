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
      this.handleDelete = this.handleDelete.bind(this);
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

    handleDelete(id) {
      event.preventDefault();
      fetch(`/api/v1/prescriptions/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application.json' },
        credentials: 'same-origin',
        body: JSON.stringify({
          prescription: { id: id }
        })
      })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
        let errorMessage = `${response.status}
        (${response.statusText})`
          error = new Error(errorMessage);
        throw(error);
      }
    })
      .then(response => response.json())
      .then(body => {
        if (body['successful']) {
          console.log("It worked!!!")
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  render(){

    let medications = this.state.prescriptions.map(prescription => {
      let onClickDelete = () => {
        this.handleDelete(prescription.id)
      }
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
            delete={prescription.delete}
            onClickDelete={onClickDelete}
            />
      )
    })

  return(
    <div>
    <h1> Your Medicine Cabinet </h1>
      {medications}
          <a href="/medications" className="button">Add Another Medication</a>
    </div>
    )
  }
}

export default PrescriptionContainer
