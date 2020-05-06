import React from 'react';

const UiButton = ( props ) => {
  return (
    <button   
      className={ props.className }
      type="button"
      title={ props.title }
      style={{ backgroundColor: props.color }}
      onClick={ props.buttonClick }
    >
      { props.value }
    </button>
  );
};

export default UiButton;