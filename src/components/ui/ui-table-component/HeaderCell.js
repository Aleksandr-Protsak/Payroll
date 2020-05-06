import React from 'react';

const HeaderCell = ( props ) => {
  if( Array.isArray( props.col ) ){

    return props.col.map( ( col, index ) => {

      return <th key={ index }>
                { index + 1 }
              </th>
    });
  }else{
    let keys = Object.keys( props.col );
    let key = keys[0];
  
    return props.col[key].map( ( col, index ) => {

      return <th key={ index }>
                { index + 1 }
              </th>
    });
  };
};

export default  HeaderCell;