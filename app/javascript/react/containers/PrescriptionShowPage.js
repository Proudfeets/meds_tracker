import React, {Component} from 'react';

class PrescriptionShowPage extends Component {
  constructor(props) {
    super(props);
      this.state={
        prescription: [],
        medication: []
      }
    }
  componentDidMount(){
    fetch(`/api/v1/prescriptions/${this.props.params.id}`)
    .then((response) => {
      let responseBody = response.json()
      return responseBody;
    })
    .then(responseBody => {
      this.setState({
        prescription: responseBody.prescription,
        medication: responseBody.medication
      });
    });
  }
render(){
      return (
    <div>
    <h2> Medication: </h2><p></p>
      <h5>{this.state.medication.generic_name}</h5>
      <h5> {this.state.medication.brand_name}</h5><br/>
      <h2>Dosage details:</h2><p></p>
        <h5> One dose: {this.state.prescription.dosage}</h5>
        <h5> Take {this.state.prescription.frequency_number} {this.state.prescription.frequency_period}</h5>
        <h5> {this.state.prescription.special_instructions}</h5><br/>

      <div className="button-group">
        <a href="/medications" className="button">Add Another Prescription</a>
        <a href="/prescriptions" className="button">See Current Medications List</a>
    </div>
    </div>
    )
  }
}

export default PrescriptionShowPage;
