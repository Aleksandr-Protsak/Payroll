import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../../actions/index';

import AddNewEmpoyeeForm from './AddEmployeeForm'; 
import UiButton from '../../ui/ui-button/UiButton'; 

class AddNewEmployee extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      active : false
    }

    this.addNewEmpoyee = this.addNewEmpoyee.bind(this);
    this.signOut = this.signOut.bind(this);
  };

  addNewEmpoyee(){
   this.setState({ active: !this.state.active });
  };
  
  signOut(){
    this.props.signOut();
  };

  render() {
    return (
      <div className="add-employee-content">
        <UiButton
              className={ 'new-employee-button' }
              buttonClick={ this.addNewEmpoyee }
              title={ 'Click to add new employee' }
              value={ '+ Add New Employee' }
        />
        <AddNewEmpoyeeForm
              id={ this.state.active ? 'show' : 'hide' }
        />
        <NavLink exact to="/" onClick={ this.signOut }>Sign Out</NavLink>
      </div>
      );
    }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    signOut: () => dispatch( signOut() ),

  };
};

export default  connect( null, mapDispatchToProps )( AddNewEmployee );