import React, { useEffect } from 'react';

import { handleDoubleClick, handleBlur } from './actions';

import UiInput from '../ui-input/UiInput';
import UiButton from '../ui-button/UiButton';

const ChangeDataCell = ( props ) => {
  
  useEffect( () => {

    if( props.isLoading && props.col.length !== 0 ) props.isLoading( true );
    
  });

  if( props.col ){
    let id = props.id;
    return props.col.map( ( col, index ) => {

      if( props.changeHeader ){
        return <th key={ index }
                   col={ index + 1 }
                   className={ 'inactive-cell' }
                   onDoubleClick={ handleDoubleClick }
                >
                  { col.name }
                  <UiInput 
                            key={ index }
                            className={ 'active-cell-input' }
                            onInput={ props.onChangeInput }
                            defaultValue={ col.name }
                            name={ index }
                            onBlur={ handleBlur }
                  />
                  <UiButton 
                      className={ 'remove-column' }
                      buttonClick={ props.clickToRemoveColumn.bind( null, col.name ) }
                      title={ 'Click for remove column' }
                      value={ '-' }
                  />
                </th>
      };

      return   <td key={ index }
                    col={ index + 1 }
                    className={ 'inactive-cell' }
                    onDoubleClick={ handleDoubleClick }
                >
                  { col.value[id] ? col.value[id] : '-' }
                  <UiInput 
                            key={ col.name }
                            className={ 'active-cell-input' }
                            name={ col.name }
                            onInput={ props.onChangeInput }
                            defaultValue={ col.value[id] ? col.value[id] : '-' }
                            onBlur={ handleBlur }
                            onFocus={ props.handleFocus }
                  />
                </td>
      });
  };
};

export default  ChangeDataCell;


