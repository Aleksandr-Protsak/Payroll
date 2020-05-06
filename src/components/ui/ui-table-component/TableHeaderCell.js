import React, { useEffect } from 'react';

const ChangeDataCell = ( props ) => {
  
  useEffect( () => {

    if( props.isLoading && props.col.length !== 0 ) props.isLoading( true );

  });

  if( props.col ){

    return props.col.map( ( col, index ) => {

      return <th key={index}
                 col={ index + 1 }
              >
                { col.name }
              </th>
    });
  };

};

export default  ChangeDataCell;