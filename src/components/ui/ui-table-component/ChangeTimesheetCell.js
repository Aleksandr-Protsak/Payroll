import React, { useEffect } from 'react';

import { handleDoubleClick, handleBlur } from './actions';

import UiInput from '../ui-input/UiInput';

const ChangeTimesheetCell = ( props ) => {

  useEffect( () => {
    
    if( props.isLoading && props.col.length !== 0 ) props.isLoading( true );
    
  });

  if( props.col ){
    let nowDay = new Date().getDate();

    return props.col.map( ( col, index ) => {

      if( nowDay >= index + 1 ){
        
        return  <td key={ index }
                            className={ 'inactive-cell' }
                            onDoubleClick={ handleDoubleClick }
                >
                  { col }
                  <UiInput 
                        className={ 'active-cell-input' }
                        name={ index }
                        onInput={ props.onChangeInput }
                        defaultValue={ col }
                        onBlur={ handleBlur }
                        onFocus={ props.handleFocus }
                  />
                </td>
      }else{
        return  <td key={ index }>{ col }</td>
      }
      
    });
  };

  return <td></td>;
  
};

export default  ChangeTimesheetCell;