import React, {Component} from "react";

const MedicationBrandField = props => {
  return(
    <div>
    <label>{props.label}</label>
    <textarea
      name="brand-field"
      type="text"
      value={props.content}
      onChange={props.handleMedicationBrandChange}
    />
    </div>
  )
}
export default MedicationBrandField;
