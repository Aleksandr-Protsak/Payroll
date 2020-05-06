import React, { useEffect } from 'react';

import { calculateSalaryForNow } from './actions';

const CellSalaryNow = ( props ) => {
  useEffect(() => {
    
    if( props.isLoading && props.col.length !== 0 ) props.isLoading( true );
 
  });
          
  if( props.col ){
    let id = props.id;
    let newArray = props.timeSheet.filter( ( item ) =>  item.length !== 0 && item !== 'В'  );
    let days = newArray.length;

    return props.col.map( ( col, index ) => {
      let salary = col.value[id]

      return  <td key={ index }
                col={ index + 1 }
              >
                  { calculateSalaryForNow( salary, days ) ?  calculateSalaryForNow( salary, days ) : 0}
              </td>
      });
  };

  return <td></td>

}

export default  CellSalaryNow;


