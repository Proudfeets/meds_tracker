import React, {Component} from "react";

const MedicationGenericField = props => {
  return(
    <div>
    <label>{props.label}</label>
    <textarea
    name="generic-field"
    type="text"
    value={props.content}
    onChange={props.handleMedicationGenericChange}
    />
    </div>
  );
}

export default MedicationGenericField;
