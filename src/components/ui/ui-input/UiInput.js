import React from 'react';

const UiInput = ( props ) => {
    return (
      <input  
        className={ props.className } 
        required
        checked={ props.cheked }
        type={ props.type } 
        name={ props.name }
        title={ props.title }
        value={ props.value }
        defaultValue={ props.defaultValue }
        placeholder={ props.placeholder }
        onChange={ props.onInput }
        onDoubleClick={ props.doubleClick }
        onBlur={ props.onBlur }
        onFocus={ props.onFocus }
      />
    );
};

export default UiInput;