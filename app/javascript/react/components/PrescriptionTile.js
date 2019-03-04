import React, {Component} from "react";

const PrescriptionTile = props => {

  return (
    <div>
      <h3>{props.generic}</h3>
      <h5>{props.brand} <br/>
          Take: {props.dosage}<br/>
          {props.period}<br/>

      </h5>

      <br/>
    </div>
    )
}

export default PrescriptionTile;
