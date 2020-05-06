import React from 'react';

import Cell from './ChangeDataCell';

const ChangeHeader = ( props ) => {
    return (
        <tr>
          <th>Full Name</th>
          <th>Position</th>
          <Cell
            col={ props.employeeStaffList }
            changeHeader={ true }
            onChangeInput={ props.onChangeInput }
            clickToRemoveColumn={ props.clickToRemoveColumn }
          />
        </tr>
    );
};

export default ChangeHeader;
