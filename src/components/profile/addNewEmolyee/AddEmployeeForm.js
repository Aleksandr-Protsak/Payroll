import React, { Component } from 'react';
import { addUser } from '../../../actions/index';

import UiButton from '../../ui/ui-button/UiButton'; 
import UiInput from '../../ui/ui-input/UiInput'; 

class AddNewEmpoyeeForm extends Component {
  constructor( props ) {
    super( props );
    this.state = {
        login: '',
        password: '',
        firstName: '',
        lastName: '',
        position: '',
        email: '',
        phone: '',
        display: 'none',
        errMesage:'',
        color: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  };

  checkForm( inputValue ) {
    return inputValue.replace( /\s+/g, '' ).length;
  };

  getData( data ){
    return  data = {
        login: this.state.login,
        password: this.state.password,
        informations: {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            position: this.state.position,
            email: this.state.email,
            phone: this.state.phone,
            start_employee: new Date().toISOString().slice(0,10)
        }
    };
  };

  handleClick(){
    let data;
    let userData = this.getData( data );

    if( this.checkForm( this.state.login ) 
       && this.checkForm( this.state.password ) 
       && this.checkForm( this.state.firstName ) 
       && this.checkForm( this.state.lastName )){ 

        addUser( userData ).then( () => {
            this.setState({ 
                            errMesage: 'Your data successfully sended!',
                            color: 'green',
                            display: 'inline-block',
                            login: '',
                            password: '',
                            firstName: '',
                            lastName: '',
                            position: '',
                            email: '',
                            phone: ''
                         });
            document.getElementById( 'form-main' ).reset();
        })
        .catch( err => 
            alert( err )
        );
    }else{
        this.setState({ 
                       errMesage: 'Fill all field please!',
                       color: 'red',
                       display: 'inline-block'
                     });
    };
  };

  onChangeInput( e ){
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };

  render() {
    return (
        <div className="new-employee-content" id={ this.props.id }>
            <p>Add new emloyee</p>
            <div className="new-employee-form">
                <form id="form-main">
                <UiInput 
                    onInput={ this.onChangeInput } 
                    title={ 'Enter First Name' }
                    name={ 'firstName' }
                    type={ 'text' }
                    placeholder={ 'Enter First Name' }
                />
                <UiInput 
                    onInput={ this.onChangeInput } 
                    title={ 'Enter Last Name' }
                    name={ 'lastName' }
                    type={ 'text' }
                    placeholder={ 'Enter Last Name' }
                />
                <UiInput 
                    onInput={ this.onChangeInput } 
                    title={ 'Enter the position' }
                    name={ 'position' }
                    type={ 'text' }
                    placeholder={ 'Enter the position' }
                />
                <UiInput 
                    onInput={ this.onChangeInput } 
                    title={'Enter e-mail'}
                    name={'email'}
                    type={'text'}
                    placeholder={'Enter e-mail'}
                />
                <UiInput 
                    onInput={ this.onChangeInput } 
                    title={ 'Enter contact phone' }
                    name={ 'phone' }
                    type={ 'text' }
                    placeholder={ 'Enter contact phone' }
                />
                <UiInput 
                    onInput={ this.onChangeInput } 
                    title={ 'Enter login' }
                    name={ 'login' }
                    type={ 'text' }
                    placeholder={ 'Enter login' }
                />
                <UiInput 
                    onInput={ this.onChangeInput } 
                    title={ 'Enter password' }
                    name={ 'password' }
                    type={ 'text' }
                    placeholder={ 'Enter password' }
                />
                <UiButton 
                    buttonClick={ this.handleClick }
                    title={ 'AClick to add' }
                    value={ 'ADD' }
                />
                </form>
    <span style={{ display: this.state.display, color: this.state.color }}>{ this.state.errMesage }</span>
            </div>
        </div>
    );
  };
};

export default  AddNewEmpoyeeForm;


