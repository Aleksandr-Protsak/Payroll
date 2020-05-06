import axios from 'axios';
import { GET_STAFF_LIST_SALARY, GET_STAFF_INFORMATIONS, GET_STAFF_TIMESHEET, AUTH_SIGN_IN, AUTH_ERROR, AUTH_SIGN_OUT } from './types';


export function getStaffInformations(){
  return async dispatch => {

    try{
      const res = await axios.get( 'http://localhost:8080', { withCredentials: true } );

      dispatch({
        type: GET_STAFF_INFORMATIONS,
        payload: res.data
      });
    }catch( err ){
      console.log( err );
    };
  };
};

export function getStaffListSalary(){
  return async dispatch => {
    try{
      const res = await axios.get( 'http://localhost:8080/stafflist', { withCredentials: true } );

      dispatch({
        type: GET_STAFF_LIST_SALARY,
        payload: res.data
      });
    }catch( err ){
      console.log( err );
    };
  };
};

export function authUser( data ) {
  return async dispatch =>{
      try {
        const res = await axios.post( 'http://localhost:8080/user', data, { withCredentials: true } );
        
        dispatch({
          type: AUTH_SIGN_IN,
          payload: res.data
        });

        localStorage.setItem( 'TOKEN', res.data.token );
    }
    catch ( err ) {

      dispatch({
        type: AUTH_ERROR,
        payload: 'You have entered an incorrect login or password'
      });
    };
  };
};

export function signOut() {
  return dispatch =>{
    localStorage.removeItem( 'TOKEN' );

    dispatch({
      type: AUTH_SIGN_OUT,
      payload: ''
    });
  };
};

export function addUser( data ) {
    return axios.post( 'http://localhost:8080', data, { withCredentials: true } )
    .then( () =>
      getStaffInformations()
    )
    .catch( err => 
      console.log( err )
    );
};

export function saveStaffListSalary( data ) {

  return axios.put( 'http://localhost:8080', data, { withCredentials: true } )
    .then( () => 
      getStaffListSalary()
    )
    .catch( err => 
      console.log( err )
    );
};

export function saveStaffTimesheet( data ) {
  return axios.put( 'http://localhost:8080/timesheet', data, { withCredentials: true } )
    .then( () => 
      getStaffListSalary()
    )
    .catch( err => 
      console.log( err )
    );
};

export function getStaffTimesheet(){
  return async dispatch => {
    try{
      const res = await axios.get( 'http://localhost:8080/timesheet', { withCredentials: true } );

      dispatch({
        type: GET_STAFF_TIMESHEET,
        payload: res.data
      });
    }catch( err ){
      console.log( err );
    };
  };
};

export function removeEmployee( id ) {
  return axios.delete( `http://localhost:8080/${id}`, { withCredentials: true } )
    .then( () => 
      getStaffInformations()
    )
    .catch( err => 
      console.log( err )
    );
};


  
