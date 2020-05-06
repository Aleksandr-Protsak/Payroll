import React from 'react';

import SumColumnCell from './SumColumnCell'

const SumColumns = ( props ) => {
  if( props.employeeStaffList ){
    return (
      <tr>
        <th>Sum</th>
        <th>-</th>
        <SumColumnCell
          col={ props.employeeStaffList }
          isLoadingSwitch={ props.isLoadingSwitch }
          tableId={ props.tableId }
        />
      </tr>
    );
  };

  return <tr></tr>
};

export default SumColumns;