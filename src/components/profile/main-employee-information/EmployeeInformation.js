import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getStaffInformations, getStaffTimesheet, getStaffListSalary } from './../../../actions/index';

import Sidebar from '../../ui/ui-sidebar/Sidebar';
import Routerviews from '../../../router/routerViews';

class EmployeeInformation extends Component {
  constructor( props ) {
    super( props );
    this.state = {

    }
  };

  componentDidMount(){
    this.props.fetchData();
    this.props.getUser();
    this.props.fetchUsersTimesheet();
  };
  
  render() {
    return (
        <div className="main-content">
          <Sidebar />
          <div className="view-content">
              <Routerviews />
          </div>
        </div>
      );
    }; 
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch( getStaffInformations() ),
    getUser: () => dispatch( getStaffListSalary() ),
    fetchUsersTimesheet : () => dispatch( getStaffTimesheet() ),

  };
};

export default  connect( null, mapDispatchToProps )( EmployeeInformation );