import React, {Component} from "react";

const BrandNameField = props => {
  return(
    <div className="linear-gradient">
    <label>{props.label}</label>
    <textarea
      name="brand-field"
      type="text"
      value={props.content}
      onChange={props.handleBrandNameChange}
    />
    </div>
  )
}
export default BrandNameField;
