import React, {Component} from "react";

const PrescriptionTile = props => {
  return(
    <div>
    <h2>{props.genericName} </h2>
    <h2>{props.brandName} </h2>
    <h2>Take: {props.dosage} every {props.frequencyNumber} {props.frequencyPeriod}.</h2>
    </div>
  )
}
export default PrescriptionTile;
