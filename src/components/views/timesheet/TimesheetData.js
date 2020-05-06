import React from 'react';

import Cell from '../../ui/ui-table-component/ChangeTimesheetCell';

const TablesheetData = ( props ) => {
  return (
    props.employeeList.map( ( item, index ) => (
    
    <tr key={ item._id } row={ index }>
      <td className="full-name">
        <input type="text" 
                readOnly 
                defaultValue={ `${item.informations.firstName}  ${item.informations.lastName}` }
        />
      </td>
      <td>
        <input  type="text" 
                readOnly 
                defaultValue={ item.informations.position ? item.informations.position : '-' }
        />
      </td>
      <Cell
        col={ props.usersTimesheetList[item._id] ? props.usersTimesheetList[item._id] : props.daysOfTheMonth }
        onChangeInput={ props.onChangeInput }
        handleFocus={ props.handleFocus.bind( null, item._id ) }
        isLoading={ props.isLoading }
      />
    </tr>

    ))
  );
};

export default TablesheetData;