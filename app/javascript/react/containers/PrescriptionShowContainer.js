import React, {Component} from "react";
import PrescriptionTile from '../components/PrescriptionTile';

class PrescriptionShowContainer extends Component {
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
          label="Prescription"
          />
      )
    })
  return(
    <div>
      {medications}
      <PrescriptionTile/>
      </div>
    )
  }
}
export default PrescriptionShowContainer
