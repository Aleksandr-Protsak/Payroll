import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (OriginalComponent) => {
  class MixedComponent extends Component {
    constructor( props ) {
      super( props );
      this.state = {
  
      };
    };

    checkAuth(){
      if( !this.props.auth.isAuthenticated && !this.props.auth.token ){
          this.props.history.push( '/' );
      }
    };
    
    componentDidMount(){
        this.checkAuth();
    };

    componentDidUpdate(){
        this.checkAuth();
    };
      
    render() {
      return <OriginalComponent { ...this.props }/>
    } 
  }

  const mapStateToProps = ( state ) => {
    return {
      auth: state.authUser
    };
  };
    
  return  connect( mapStateToProps )( MixedComponent );
}   




