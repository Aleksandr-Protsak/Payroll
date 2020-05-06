import React from 'react';

import Cell from './HeaderCell';

const Header = ( props ) => {
  return (
      <tr>
        <th>Full Name</th>
        <th>Position</th>
        <Cell
          col={ props.daysOfTheMonth ? props.daysOfTheMonth : props.usersTimesheetList }
        />
      </tr>
  );
};

export default Header;