import React from 'react';

import Cell from './TableHeaderCell';

const ChangeHeader = ( props ) => {
    return (
        <tr>
          <th>Full Name</th>
          <th>Position</th>
          <Cell
            col={ props.employeeStaffList ? props.employeeStaffList : [] }
          />
        </tr>
    );
};

export default ChangeHeader;