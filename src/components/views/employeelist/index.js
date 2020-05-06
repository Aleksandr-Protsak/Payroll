import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveStaffListSalary, removeEmployee } from '../../../actions/index';

import TableHeader from '../../ui/ui-table-component/ChangeHeader';
import TableSumColumns from '../../ui/ui-table-component/SumColumns';
import EmployeeDataList from './EmployeeDataList';
import UiButton from '../../ui/ui-button/UiButton';
import SumCell from '../../ui/ui-table-component/SumRowsCell.js';

class EmployeeList extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      col : [],
      userInformations : [],
      isLoadingSwitch : false,
      count: 1
     }

    this.addNewColumn = this.addNewColumn.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onChangeInputHeader = this.onChangeInputHeader.bind(this);
    this.getIdOnFocus = this.getIdOnFocus.bind(this);
    this.handleClickSave = this.handleClickSave.bind(this);
    this.isLoading = this.isLoading.bind(this);
    this.removeEmployee = this.removeEmployee.bind(this);
    this.removeColumn = this.removeColumn.bind(this);
  };

  componentDidMount() {
    if( this.props.userData.usersInformations ){
      this.setState({ userInformations: this.props.userData.usersInformations });
    };
    if( this.props.userData.usersStaffList.data ){
      this.setState({ col: this.props.userData.usersStaffList.data });
    };
  };

  componentDidUpdate( prevProps ){

    if( prevProps.userData.usersStaffList.data !== this.props.userData.usersStaffList.data ){
      this.setState({ col: this.props.userData.usersStaffList.data });
    };
    if( prevProps.userData.usersInformations !== this.props.userData.usersInformations ){
      this.setState({ userInformations: this.props.userData.usersInformations });
    };
 };

  handleClickSave(){
    const data = this.state.col;
 
    let validateData = data.filter( item => Object.keys(item.value).length !== 0  );

    if( validateData.length ) {
      saveStaffListSalary( validateData );
      window.location.reload();
    };
  };

  addNewColumn(){
    let colValue = this.state.col;
    let newCount = this.state.count;
   
    colValue.push({ name: `New_column_${newCount}`, value: {} });
    newCount++;
    this.setState({ 
                    col: colValue,
                    count: newCount
                  });
  };

  removeColumn( name ){
    let columnList = this.state.col;
    let newColumnList = columnList.filter( item => item.name !== name );

    this.setState({
                  col : newColumnList,
                  isLoadingSwitch: false
                })
  };

  getNewObject( key, value ){
    let obj = {};
    obj[key] = value;
    return obj;
  };

  onChangeInput( e ){
    let name = e.target.name;
    let value = e.target.value;
    let id = this.state.id;
    let newObject = { [id] : value }
    let newColValue = this.state.col.map( item => {
      if( item.name == name ){
        return { ...item, value: { ...item.value, ...newObject } }
      }else{
        return { ...item }
      };
    });
    this.setState({ col: newColValue });
  };

  getIdOnFocus( id ){
      this.setState({ id: id });
  };

  onChangeInputHeader( e ){
    let value = e.target.value;
    let colValue = this.state.col;
    let index = e.target.name;
    
    colValue[index].name = value;
    this.setState({ col: colValue });
  };

  isLoading( val ){
    if( this.state.isLoadingSwitch !== val )
      this.setState({ isLoadingSwitch: val });
  };

  removeEmployee( id ){
    let userList = this.state.userInformations;
    let newUserList = userList.filter( item => item._id !== id );

    this.setState({
                  userInformations : newUserList,
                  isLoadingSwitch: false 
                });

  removeEmployee(id);
  window.location.reload();
  };

  render() {
     return (
        <div className="employee-list-block">
          <h2>Staff List</h2>
          <div>
            <table id='staff-list' className='border-none padding-none'>
              <tbody className='border-none padding-none'>
                <tr className='border-none padding-none'>
                  <td className='border-none padding-none'>
                    <table id='staff-list-data'>
                      <tbody>
                        <TableHeader 
                          employeeStaffList={ this.state.col }
                          onChangeInput={ this.onChangeInputHeader }
                          clickToRemoveColumn={ this.removeColumn }
                          changeHeader={ true }
                        />
                        <EmployeeDataList 
                          employeeList={ this.state.userInformations }
                          employeeStaffList={ this.state.col }
                          onChangeInput={ this.onChangeInput }
                          clickToRemove={ this.removeEmployee }
                          handleFocus={ this.getIdOnFocus }
                          isLoading={ this.isLoading }
                          isLoadingSwitch={ this.state.isLoadingSwitch }
                          tableId={ 'staff-list-data' }
                        />
                        <TableSumColumns
                          employeeStaffList={ this.state.col }
                          isLoadingSwitch={ this.state.isLoadingSwitch }
                          tableId={ 'staff-list-data' }
                        />
                      </tbody>
                    </table>
                  </td>
                  <td className='border-none padding-none'>
                      <SumCell
                        col={ this.state.col }
                        employeeList={ this.state.userInformations }
                        isLoadingSwitch={ this.state.isLoadingSwitch }
                        tableId={ 'staff-list-data' }
                      />
                   </td>
                </tr>
              </tbody>
            </table>
            <UiButton 
                    className={ 'new-col' }
                    buttonClick={ this.addNewColumn }
                    title={ 'Add coll' }
                    value={ '+' }
                />
          </div>
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
    userData: state,
    userDataList: state
  }
};

export default  connect( mapStateToProps )( EmployeeList );