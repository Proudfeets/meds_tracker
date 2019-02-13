import React, {Component} from "react";

const GenericNameField = props => {
  return(
    <div>
    <label>{props.label}</label>
    <textarea
    name="generic-field"
    type="text"
    value={props.content}
    onChange={props.handleGenericNameChange}
    />
    </div>
  );
}

export default GenericNameField;
