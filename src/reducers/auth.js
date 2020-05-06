import { AUTH_SIGN_IN, AUTH_ERROR, AUTH_SIGN_OUT } from './../actions/types';

const DEFAULT_STATE = {
    isAuthenticated: false,
    role: '',
    token: '',
    errorMessage: false
}

export default ( state = DEFAULT_STATE, action ) => {
    switch ( action.type ) {
          case AUTH_SIGN_IN :
               return { ...state, role: action.payload.role, token: action.payload.token, isAuthenticated: true, errorMessage: false }
          case AUTH_SIGN_OUT :
               return { ...state, role: action.payload, token: action.payload, isAuthenticated: false, errorMessage: false }
          case AUTH_ERROR :
               return { ...state, errorMessage: action.payload, isAuthenticated: false, role: '' }
          default:
               return state
     }
};