import { GET_STAFF_LIST_SALARY, GET_STAFF_INFORMATIONS, GET_STAFF_TIMESHEET } from './../actions/types';

export function usersInformations ( state = [], action ){
    switch ( action.type ) {
          case GET_STAFF_INFORMATIONS:
               return action.payload
          default:
               return state
     };
};

export function usersStaffList ( state = {}, action ) {
     switch ( action.type ) {
          case GET_STAFF_LIST_SALARY:
               return action.payload
          default:
               return state
     };
};

export function usersTimesheet ( state = {}, action ) {
     switch ( action.type ) {
          case GET_STAFF_TIMESHEET:
               return action.payload
          default:
               return state
     };
};