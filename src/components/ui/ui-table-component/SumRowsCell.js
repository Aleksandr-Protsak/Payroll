import React, { useState, useEffect } from 'react';

import { sumRow } from './actions';

const SumRowsCell = ( props ) => {

  const [isLoading, setIsLoading] = useState( false );
  let sum = 0;

  function tableIsLoaded( status ) {

    setIsLoading( status );

  };

  useEffect( () => {

    tableIsLoaded( props.isLoadingSwitch )

  },[props.isLoadingSwitch] );


  if( props.employeeList ){

    return  <table id='row-sum' className='border-none'>
              <tbody>
                  <tr>
                    <th>Sum</th>
                  </tr>

                  {
                    props.employeeList.map( ( item, index ) => {
                      
                      let val = isLoading ? sumRow( props.tableId, index + 1 ) : 0
                      sum += val

                      return  <tr key={ index }>
                                <th>
                                  { val }
                                </th>
                              </tr>
                    })
                  }

                  <tr>
                    <th>{ Math.floor( sum * 100 ) / 100 }</th>
                  </tr>
              </tbody>
            </table>
 };
};

export default  SumRowsCell;