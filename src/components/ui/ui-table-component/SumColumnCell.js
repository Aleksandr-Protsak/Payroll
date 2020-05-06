import React, { useState, useEffect } from 'react';

import { sumColumn } from './actions';

const SumColumnCell = ( props ) => {
  const [isLoading, setIsLoading] = useState( false );

  function tableIsLoaded( status ) {

    setIsLoading( status );

  }

  useEffect( () => {

    tableIsLoaded( props.isLoadingSwitch );

  },[props.isLoadingSwitch] );

  if( props.col ){

    return props.col.map( ( col, index ) => {
 
      return <th key={ index } 
                  col={ index + 1 }
              >
                
                { isLoading ? sumColumn( props.tableId, index + 2 ) : 0 }
                
              </th>
    });

  };

  return <th>0</th>;
};

export default  SumColumnCell;