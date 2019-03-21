import React, {Component} from "react";
import {Link} from 'react-router';

const PrescriptionTile = props => {

  let handleDelete = () => {
    props.onClickDelete(props.id)
  }
  return (
    <div>
      <div className="tile">
        <Link to={`/prescriptions/${props.id}`}>
          <h3>{props.generic}</h3>
          <h5>{props.brand}</h5>
        </Link>
        <button className="delete" onClick={handleDelete}> Delete Prescription</button>
        </div>
      <br/>
    </div>
    )
}

export default PrescriptionTile;
