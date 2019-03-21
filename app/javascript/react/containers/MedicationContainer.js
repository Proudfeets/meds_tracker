import React, {Component} from "react";
import GenericNameField from "../components/GenericNameField";
import BrandNameField from "../components/BrandNameField";
import DosageField from "../components/DosageField";
import FrequencyNumberField from "../components/FrequencyNumberField";
import FrequencyPeriodField from "../components/FrequencyPeriodField";
import PrescriptionTile from '../components/PrescriptionTile';

class MedicationContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
        generic_name: "",
        brand_name: "",
        dosage: "",
        frequency_period: "Each year",
        frequency_number: "1",
        user_prescriptions: [],
      };
      this.handleGenericNameChange = this.handleGenericNameChange.bind(this);
      this.handleBrandNameChange = this.handleBrandNameChange.bind(this);
      this.handleSubmit= this.handleSubmit.bind(this);
      this.addNewMedication = this.addNewMedication.bind(this);
      this.handleDosageChange = this.handleDosageChange.bind(this);
      this.handleFrequencyPeriodChange = this.handleFrequencyPeriodChange.bind(this);
      this.handleFrequencyNumberChange = this.handleFrequencyNumberChange.bind(this);
      this.handleClear = this.handleClear.bind(this);
    }

  handleGenericNameChange(event) {
   this.setState({ generic_name: event.target.value });
  }

  handleBrandNameChange(event) {
    this.setState({ brand_name: event.target.value });
  }

  handleFrequencyPeriodChange(event) {
    this.setState({ frequency_period: event.target.value });
  }

  handleFrequencyNumberChange(event) {
    this.setState({ frequency_number: event.target.value });
  }

  handleDosageChange(event) {
    this.setState({ dosage: event.target.value });
  }

  handleClear(event) {
    event.preventDefault();
      this.setState({
        generic_name: "",
        brand_name: "",
        dosage: "",
        frequency_period: "Each year",
        frequency_number: "1",
      })
  }

   handleSubmit(event) {
     event.preventDefault();
     let formPayload = {
       generic_name: this.state.generic_name,
       brand_name: this.state.brand_name,
       dosage: this.state.dosage,
       frequency_number: this.state.frequency_number,
       frequency_period: this.state.frequency_period,
     }
     this.addNewMedication(formPayload);
     this.handleClear(event);
   }

   handleDelete(event) {
     event.preventDefault();
     let formPayload={
       generic_name: this.state.generic_name,
       brand_name: this.state.brand_name,
       dosage: this.state.dosage,
       frequency_number: this.state.frequency_number,
       frequency_period: this.state.frequency_period,
     }

   }

   addNewMedication(formPayload){
   let jsonStringInfo = JSON.stringify(formPayload);
   fetch(`/api/v1/prescriptions`, {
     method: "POST",
     body: jsonStringInfo,
     credentials: 'same-origin',
     headers:{
       "Accept": "application/json",
       "Content-Type": "application/json"
     }
   })
   .then(response => {
     if(response.ok) {
       return response;
       console.log(formPayload)
     } else {
       let errorMessage =`Error here: ${response.status} (${response.statusText})`,
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
        <div>
          <form className="new-medication-form" onSubmit={this.handleSubmit}>
            <GenericNameField
              content={this.state.generic_name}
              label="Required: Generic Name (eg: acetaminophen)"
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
              label="Required: Dosage (eg: 50mg)"
              name="dosage"
              handleDosageChange={this.handleDosageChange}
              />
              <FrequencyNumberField
              content={this.state.frequency_number}
              label="Required: How many do you take at a time?"
              name="frequency_number"
              handleFrequencyNumberChange={this.handleFrequencyNumberChange}
              />
              <FrequencyPeriodField
              content={this.state.frequency_period}
              label="Required: How often do you take this medication?"
              name="frequency_period"
              handleFrequencyPeriodChange={this.handleFrequencyPeriodChange}
              />
              <n/><p></p>
            <div className="button-group">
              <button className="button" onClick={this.handleClear}> Clear</button>
              <input className="button" onSubmit={this.handleSubmit} type="submit" value="Submit" />
              <a href="/prescriptions" className="button">My Cabinet</a>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default MedicationContainer;
