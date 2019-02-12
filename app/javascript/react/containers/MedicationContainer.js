import React, {Component} from "react";
import MedicationGenericField from "../components/MedicationGenericField";
import MedicationBrandField from "../components/MedicationBrandField";

class MedicationContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
        medicationGeneric: "",
        medicationBrand: "",
      };
      this.handleMedicationGenericChange = this.handleMedicationGenericChange.bind(this);
      this.handleMedicationBrandChange = this.handleMedicationBrandChange.bind(this);
    }


   handleMedicationGenericChange(event) {
     this.setState({ medicationGeneric: event.target.value});
   }
   handleMedicationBrandChange(event) {
     this.setState({ medicationBrand: event.target.value});
   }

   handleSubmit(event) {
     event.preventDefault();
     let formPayload = {
       medicationGeneric: this.state.medicationGeneric,
       medicationBrand: this.state.medicationBrand,
     }
     this.addNewMedication(formPayload);
   }



  render(){
    return(
      <div>
        <h1> Add a new medication to your list </h1>
          <form className="new-medication-form" onSubmit={this.handleSubmit}>
            <MedicationGenericField
              content={this.state.medicationGeneric}
              label="Generic Name (eg: acetaminophen)"
              name="medication-generic"
              handleMedicationGenericChange={this.handleMedicationGenericChange}
            />
            <MedicationBrandField
              content={this.state.medicationBrand}
              label="Medicattion Brand Name (eg: Tylenol)"
              name="medication-brand"
              handleMedicationBrandChange={this.handleMedicationBrandChange}
              />
            <div className="button-group">
              <button className="button"> Clear</button>
              <input className="button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default MedicationContainer;
