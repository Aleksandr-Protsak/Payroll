import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import store from './store/index';
import { Provider } from 'react-redux';

import AuthForm from './components/auth-form/Form';
import Profile from './components/profile/index';

import authGuard from './components/HOCs/AuthGuard';



class App extends Component {
  render() {
    return (
      <Switch>
        <Provider store={ store }>
          <Route exact path="/" component={ AuthForm }></Route>
          <Route path="/profile" component={ authGuard( Profile ) }></Route>
        </Provider>
      </Switch>
    );
  };
};

export default App;