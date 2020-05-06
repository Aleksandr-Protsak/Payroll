import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableHeader from '../../ui/ui-table-component/TableHeader';
import TableSumColumns from '../../ui/ui-table-component/SumColumns';
import SalaryForNow from './SalaryForNow';
import SumCell from '../../ui/ui-table-component/SumRowsCell.js';

class Salary extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      isLoadingSwitch : false
    }

    this.isLoading = this.isLoading.bind( this );
  };

  isLoading(val){
    if( this.state.isLoadingSwitch !== val )
      this.setState({ isLoadingSwitch: val })
  };

  render() {
    return (
        <div className="payment-block">
          <h2>Accrued Wages</h2>
          <table id='salary-now' className='border-none padding-none'>
            <tbody className='border-none padding-none'>
              <tr className='border-none padding-none'>
                <td className='border-none padding-none'>
                  <table id="salary-now-data">
                    <tbody>
                      <TableHeader 
                        employeeStaffList={ this.props.userData.usersStaffList.data ? this.props.userData.usersStaffList.data : this.state.col }
                        changeHeader={ false }
                      />
                      <SalaryForNow
                        employeeList={ this.props.userData.usersInformations }
                        employeeStaffList={ this.props.userData.usersStaffList.data ? this.props.userData.usersStaffList.data : this.state.col }
                        employeeTimeSheet={ this.props.userData.usersTimesheet.data ? this.props.userData.usersTimesheet.data : [] }
                        isLoading={ this.isLoading }
                      />       
                        <TableSumColumns
                          employeeStaffList={ this.props.userData.usersStaffList.data ? this.props.userData.usersStaffList.data : [] }
                          isLoadingSwitch={ this.state.isLoadingSwitch }
                          tableId={ 'salary-now-data' }
                        />
                    </tbody>
                  </table>
                </td>
                <td className='border-none padding-none'>
                  <SumCell
                    col={ this.state.col }
                    employeeList={ this.props.userData.usersInformations }
                    isLoadingSwitch={ this.state.isLoadingSwitch }
                    tableId={ 'salary-now-data' }
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }; 
};

const mapStateToProps = ( state ) => {
  return {
    userData: state
  };
};

export default  connect( mapStateToProps )( Salary );