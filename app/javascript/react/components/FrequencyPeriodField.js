import React, {Component} from "react";

const FrequencyPeriodField = props => {
  return(
    <div>
      <label>{props.label}</label>
        <select
        name="frequency-period"
        type="text"
        value={props.content}
        onChange={props.handleFrequencyPeriodChange}>
      <option value= "Each year">Each year</option>
      <option value= "Each month">Each month</option>
      <option value= "Each week">Each week</option>
      <option value= "Per diem">Per diem</option>
      <option value= "Every 12 hours">Every 12 hours</option>
      <option value= "Every 8 hours">Every 8 hours</option>
      <option value= "Every 6 hours">Every 6 hours</option>
      <option value= "Every 4 hours">Every 4 hours</option>
      <option value= "Every 3 hours">Every 3 hours</option>
      </select>
    </div>
  );
}

export default FrequencyPeriodField;
