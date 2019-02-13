import React, {Component} from "react";

const DosageField = props => {
  return(
    <div>
    <label>{props.label}</label>
    <textarea
    name="dosage-field"
    type="text"
    value={props.content}
    onChange={props.handleDosageChange}
    />
    </div>
  )
}
export default DosageField;
