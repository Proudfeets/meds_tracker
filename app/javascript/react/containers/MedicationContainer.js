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
        medication_generic: "",
        medication_brand: "",
        dosage: "",
        frequency_period: "",
        frequency_number: 0,
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

  handleFrequencyPeriodChange(event) {
    this.setState({frequency_period: event.target.value});
  }

  handleFrequencyNumberChange(event) {
    this.setState({frequency_number: event.target.value});
  }

  handleDosageChange(event) {
    this.setState({dosage: event.target.value});
  }

   handleGenericNameChange(event) {
    this.setState({ medication_generic: event.target.value});
   }

   handleBrandNameChange(event) {
     this.setState({ medication_brand: event.target.value});
   }
  handleClear(event) {
    event.preventDefault();
      this.setState({
        medication_generic: "",
        medication_brand: "",
        dosage: "",
        frequency_period: "",
        frequency_number: 0,
      })
  }

   handleSubmit(event) {

     event.preventDefault();
     let formPayload = {
       medication_generic: this.state.medication_generic,
       medication_brand: this.state.medication_brand,
       dosage: this.state.dosage,
       frequency_number: this.state.frequency_number,
       frequency_period: this.state.frequency_period,
     }

     this.addNewMedication(formPayload);
     this.handleClear(event);
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
    // debugger;
  render(){

    return(
      <div>
        <h1> Your Cabinet</h1>

        <h1> Add a medication to your cabinet </h1>
          <form className="new-medication-form" onSubmit={this.handleSubmit}>
            <GenericNameField
              content={this.state.medication_generic}
              label="Generic Name (eg: acetaminophen)"
              name="medication-generic"
              handleGenericNameChange={this.handleGenericNameChange}
            />
            <BrandNameField
              content={this.state.medication_brand}
              label="Medication Brand Name (eg: Tylenol)"
              name="medication-brand"
              handleBrandNameChange={this.handleBrandNameChange}
              />
              <DosageField
              content={this.state.dosage}
              label="Dosage (eg: 50mg)"
              name="dosage"
              handleDosageChange={this.handleDosageChange}
              />
              <FrequencyNumberField
              content={this.state.frequency_number}
              label="How many do you take at a time?"
              name="frequency_number"
              handleFrequencyNumberChange={this.handleFrequencyNumberChange}
              />
              <FrequencyPeriodField
              content={this.state.frequency_period}
              label="How often do you take this medication?"
              name="frequency_period"
              handleFrequencyPeriodChange={this.handleFrequencyPeriodChange}
              />
            <div className="button-group">
              <button className="button" onClick={this.handleClear}> Clear</button>
              <input className="button" onSubmit={this.handleSubmit} type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default MedicationContainer;
