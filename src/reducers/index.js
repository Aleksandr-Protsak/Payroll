import { combineReducers } from 'redux';
import { usersInformations, usersStaffList, usersTimesheet } from './reducer';
import authUser from './auth';

const allReducers = combineReducers({
    usersInformations: usersInformations,
    usersStaffList: usersStaffList,
    usersTimesheet: usersTimesheet,
    authUser: authUser 
});

export default allReducers;