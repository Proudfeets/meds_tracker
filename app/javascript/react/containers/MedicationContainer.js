import React, {Component} from "react";
import GenericNameField from "../components/GenericNameField";
import BrandNameField from "../components/BrandNameField";
import DosageField from "../components/DosageField";
import FrequencyNumberField from "../components/FrequencyNumberField";
import FrequencyPeriodField from "../components/FrequencyPeriodField";

class MedicationContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
        generic_name: "",
        brand_name: "",
        dosage: "",
        frequencyPeriod: "",
        frequencyNumber: 0,
      };
      this.handleGenericNameChange = this.handleGenericNameChange.bind(this);
      this.handleBrandNameChange = this.handleBrandNameChange.bind(this);
      this.handleSubmit= this.handleSubmit.bind(this);
      this.addNewMedication = this.addNewMedication.bind(this);
      this.handleDosageChange = this.handleDosageChange.bind(this);
      this.handleFrequencyPeriodChange = this.handleFrequencyPeriodChange.bind(this);
      this.handleFrequencyNumberChange = this.handleFrequencyNumberChange.bind(this);
    }

  handleFrequencyPeriodChange(event) {
    this.setState({frequencyPeriod: event.target.value});
  }

  handleFrequencyNumberChange(event) {
    this.setState({frequencyNumber: event.target.value});
  }

  handleDosageChange(event) {
    this.setState({dosage: event.target.value});
  }

   handleGenericNameChange(event) {
     this.setState({ generic_name: event.target.value});
   }

   handleBrandNameChange(event) {
     this.setState({ brand_name: event.target.value});
   }

   handleSubmit(event) {

     event.preventDefault();
     let formPayload = {
       generic_name: this.state.generic_name,
       brand_name: this.state.brand_name,
       dosage: this.state.dosage,
       frequencyNumber: this.state.frequencyNumber,
       frequencyPeriod: this.state.frequencyPeriod,
     }

     this.addNewMedication(formPayload);
   }

   addNewMedication(formPayload){
   let jsonStringInfo = JSON.stringify(formPayload);
   fetch(`/api/v1/prescriptions`, {
     method: "POST",
     body: jsonStringInfo,
     credentials: 'same-origin',
     headers:{
       Accept: "application/json",
       "Content-Type": "application/json"
     }
   })
   .then(response => {
     console.log(response)
     if(response.ok) {
       return response;
     } else {
       let errorMessage =`${response.status} (${response.statusText})`,
       error = new Error(errorMessage);
       throw error;
     }
   })
   .then(formPayload => formPayload.json())
   .then(formPayload => {
     console.log(formPayload);
   });
 }

  render(){

    return(
      <div>
        <h1> Add a medication to your cabinet </h1>
          <form className="new-medication-form" onSubmit={this.handleSubmit}>
            <GenericNameField
              content={this.state.generic_name}
              label="Generic Name (eg: acetaminophen)"
              name="medication-generic"
              handleGenericNameChange={this.handleGenericNameChange}
            />
            <BrandNameField
              content={this.state.brand_name}
              label="Medication Brand Name (eg: Tylenol)"
              name="medication-brand"
              handleBrandNameChange={this.handleBrandNameChange}
              />
              <DosageField
              content={this.state.dosage}
              label="Dosage (eg: 2 pills)"
              name="dosage"
              handleDosageChange={this.handleDosageChange}
              />
              <FrequencyNumberField
              content={this.state.frequencyNumber}
              label="How often do you take this medication?"
              name="frequencyNumber"
              handleFrequencyNumberChange={this.handleFrequencyNumberChange}
              />
              <FrequencyPeriodField
              content={this.state.frequencyPeriod}
              label=" "
              name="frequencyPeriod"
              handleFrequencyPeriodChange={this.handleFrequencyPeriodChange}
              />
            <div className="button-group">
              <button className="button"> Clear</button>
              <input className="button" onSubmit={this.handleSubmit} type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default MedicationContainer;
