import React, { Component } from 'react';
import { connect } from 'react-redux';

import UiInput from '../ui/ui-input/UiInput';
import UiButton from '../ui/ui-button/UiButton';

import { authUser } from '../../actions/index';

class AuthForm extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      userData : {  login: '',
                    password: ''
                  },
      chekbox: false,
      display:'none'
    };

    this.handleClick = this.handleClick.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  };

  onChangeInput( e ){
    let name = e.target.name;
    let value = e.target.value;

    this.setState( prevState => {
      return{
        userData : { ...prevState.userData, [name] : value }
      };
    });

    this.toggleIsChecked();
  };

  toggleIsChecked() {
    this.setState({ checkbox: !this.state.checkbox });
  }

  checkForm( inputValue ) {
    return inputValue.replace( /\s+/g, '' ).length;
  }

  checkAuthUser(){
    if( !this.props.authUser.errorMessage ){
      this.props.history.push( '/profile' );
    }else{
      alert( this.props.authUser.errorMessage );
    };
  };

  async handleClick(){
    if( this.checkForm( this.state.userData.login ) && this.checkForm( this.state.userData.password ) ){
      this.setState({ display: 'none' });
      await this.props.fetchData( this.state.userData );

      this.checkAuthUser();
    }else{
      this.setState({ display: 'inline-block' });
    };
  };

  render() {
    return (
      <div className="login-block">
        <h2>Sign In</h2>
        <div className="form-block">
          <form name="log-in">
            <UiInput
              onInput={ this.onChangeInput } 
              title={ 'Enter the login' }
              name={ 'login' }
              type={ 'text' }
              placeholder={ 'Your Login' }
            />
            <UiInput 
              onInput={ this.onChangeInput } 
              title={ 'Enter the password' }
              name={ 'password' }
              type={ 'text' }
              placeholder={ 'Your Password' }
            />
            <span style={{ display: this.state.display }}>Fill all field please!</span>
          </form>
        </div>
        <UiButton 
          buttonClick={ this.handleClick }
          title={ 'Sign in' }
          value={ 'Sign in' }
        />
      </div>
    );
  };
};

const mapStateToProps = ( state ) => {
  return {
    authUser: state.authUser
  };
};
const mapDispatchToProps = ( dispatch ) => {
  return {
    fetchData: ( data ) => dispatch( authUser( data ) ),
  };
};

export default  connect( mapStateToProps, mapDispatchToProps )( AuthForm );