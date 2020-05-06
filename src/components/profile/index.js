import React, { Component } from 'react';

import AddNewEmployee from './addNewEmolyee/index'; 
import EmployeeInformation from './main-employee-information/EmployeeInformation';

class Employee extends Component {
  constructor( props ) {
    super( props );
    this.state = {

    }
  };
  
  render() {
    return (
        <div className="main">
          <AddNewEmployee />
            <EmployeeInformation />
        </div>
      );
    } 
}

export default  Employee;


