import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveStaffTimesheet } from '../../../actions/index';

import TableHeader from '../../ui/ui-table-component/TimesheetTableHeader';
import TimesheetData from './TimesheetData';
import UiButton from '../../ui/ui-button/UiButton';
import SumCell from '../../ui/ui-table-component/SumRowsCell.js';

class Timesheet extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      daysOfTheMonth : [],
      usersTimesheetList : {}, 
      cellValue : {},
      isLoadingSwitch : false
    }

    this.onChangeInput = this.onChangeInput.bind(this);
    this.getIdOnFocus = this.getIdOnFocus.bind(this);
    this.handleClickSave = this.handleClickSave.bind(this);
    this.isLoading = this.isLoading.bind(this);
  };

  componentDidMount() {
    if( this.props.userData.usersTimesheet || this.props.userData.usersInformations ){
      this.getArrayforTimesheet();
    };
  };

  componentDidUpdate( prevProps ){
     if( prevProps.userData.usersTimesheet !== this.props.userData.usersTimesheet ){
      this.getArrayforTimesheet();
    };
  };

  getLastDayOfMonth( year, month ){
    let date = new Date( year, month, 0 );
    return date.getDate();
  };

  numberDaysinMonth(){
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1 ;
    const numberDays = this.getLastDayOfMonth( year, month );
    return numberDays;
  };

               // This is a table if database for this month is empty //
  newTableforTimesheet(){
    let newdaysOfTheMonth = [] ;
    let numberDays = this.numberDaysinMonth();

    for( let i = 1; i <= numberDays; i++ ){
      newdaysOfTheMonth.push('');
    };

    this.setState({ daysOfTheMonth: newdaysOfTheMonth });
  };

            // This is a table if there is some data from database 
  dataTableforTimesheet(){
    let usersListFromDB = this.getAllEmployee();
      // If timesheet new month is empty get all user list
    let usersTimesheetListFromDB = this.props.userData.usersTimesheet.data ? this.props.userData.usersTimesheet.data : usersListFromDB; 
    let newUsersTimesheetList = { ...usersListFromDB, ...usersTimesheetListFromDB };

    let numberDays = this.numberDaysinMonth();

    for( let key in newUsersTimesheetList ){
      let index = newUsersTimesheetList[key].length;

      for( let i = index; i < numberDays; i++ ){
        newUsersTimesheetList[key].push('');
      };
     };

    this.setState({ usersTimesheetList: newUsersTimesheetList });
    if( newUsersTimesheetList ) this.setState({ cellValue: newUsersTimesheetList });
  };

  getAllEmployee(){
    let employeeId = {};
    if( this.props.userData.usersInformations ){
      this.props.userData.usersInformations.map( item => {
         employeeId[item._id] = [];
      });
    };

    return employeeId;
  };

  getArrayforTimesheet(){
    let usersTimesheetList= this.props.userData.usersTimesheet.data;
    let usersList = this.props.userData.usersInformations;

    if( usersTimesheetList || usersList ) this.dataTableforTimesheet();

    this.newTableforTimesheet();
  }; 

  getIdOnFocus( id ){
    this.setState({ id: id });
  };

  onChangeInput( e ){
    let arrValue = this.state.daysOfTheMonth;
    let index = e.target.name;
    let value = e.target.value;
    let id = this.state.id;

    if( this.state.cellValue[id] || this.state.usersTimesheetList[id] ) arrValue = this.state.cellValue[id];

    arrValue[index] = value; 

    this.setState( prevState => {
      return{
        cellValue : { ...prevState.cellValue, [id] : arrValue },
        daysOfTheMonth : arrValue
      };
    });
  };

  handleClickSave(){
    const data = this.state.cellValue;
    saveStaffTimesheet( data );
    window.location.reload();
  };

  isLoading( val ){
    if( this.state.isLoadingSwitch !== val )
      this.setState({ isLoadingSwitch: val });
  };

  render() {
    return (
        <div className="timesheet-block">
            <h2>Timesheet</h2>
            <table id='timesheet' className='border-none padding-none'>
              <tbody className='border-none padding-none'>
                <tr className='border-none padding-none'>
                  <td className='border-none padding-none'>
                    <table id='timesheet-data'>
                      <tbody>
                      <TableHeader 
                        daysOfTheMonth={ this.state.daysOfTheMonth }
                        usersTimesheetList={ this.state.usersTimesheetList }
                      />
                      <TimesheetData 
                        employeeList={ this.props.userData.usersInformations }
                        daysOfTheMonth={ this.state.daysOfTheMonth }
                        usersTimesheetList={ this.state.usersTimesheetList ? this.state.usersTimesheetList : [] }
                        onChangeInput={ this.onChangeInput }
                        handleFocus={ this.getIdOnFocus }
                        isLoading={ this.isLoading }
                      />
                      <tr>
                        <th colSpan={ this.state.daysOfTheMonth.length + 2 }>
                          Total:
                        </th>
                      </tr>
                      </tbody>
                    </table>
                    </td>
                    <td className='border-none padding-none'>
                        <SumCell
                          col={ this.state.col }
                          employeeList={ this.props.userData.usersInformations }
                          isLoadingSwitch={ this.state.isLoadingSwitch }
                          tableId={ 'timesheet-data' }
                        />
                    </td>
                  </tr>
                </tbody>
              </table>
            
            <UiButton 
                    className={ 'save-button' }
                    buttonClick={ this.handleClickSave }
                    title={ 'SAVE' }
                    value={ 'SAVE' }
            />
        </div>
      );
    }; 
};

const mapStateToProps = ( state ) => {
  return {
    userData: state
  };
};

export default  connect( mapStateToProps )( Timesheet );