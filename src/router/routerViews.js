import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Timesheet from '../components/views/timesheet/index';
import Salary from '../components/views/salary/index';
import EmployeeList from '../components/views/employeelist/index';

const Routerviews = () => {
  return (
    <Switch>
      <Route path="/profile/timesheet" component={ Timesheet }></Route>
      <Route exact path="/profile" component={ Salary }></Route>
      <Route path="/profile/employee" component={ EmployeeList }></Route>
    </Switch>
  );
};
  
export default Routerviews;