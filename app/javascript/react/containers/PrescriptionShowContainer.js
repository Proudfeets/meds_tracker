import React, {Component} from 'react';
import MedicationContainer from './MedicationContainer';
import { browserHistory, Link } from 'react-router';
import PrescriptionTile from '../components/PrescriptionTile';

class PrescriptionShowContainer extends Component {
  constructor(props) {
  super(props);
  this.state = {
    prescriptions: []
    }
  }

  componentDidMount(){
  fetch('/api/v1/prescriptions')
    .then(response => {
      if(response.ok){
        return response;
      } else {
        let errorMessage =`${response.status}(${response.statusText})`,
        error=new Error(errorMessage);
        throw(error);
      }
    })
    .then(response=> response.text())
    .then(body => {
      let bodyParsed = JSON.parse(body);
      this.setState({prescriptions: bodyParsed})
    })
  }


  render() {
    return(
    <div className="greeting">
      "Hello world from User Container"
    </div>
    );
  }
}
export default PrescriptionShowContainer;
