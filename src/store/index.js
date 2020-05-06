import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducer from '../reducers/index';

const token = localStorage.getItem( 'TOKEN' );

let store = createStore( allReducer, {
    authUser: {
        token: token,
        isAuthenticated: token ? true : false
    }
}, applyMiddleware( thunk ) );

export default store;