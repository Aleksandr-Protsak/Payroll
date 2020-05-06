import React from 'react';

import CellSalary from '../../ui/ui-table-component/CellSalaryNow';

const SalaryForNow = ( props ) => {
   return (
      props.employeeList.map( ( item, index ) => (

         <tr key={ item._id } row={ index }>
            <td><input type="text" 
                        readOnly 
                        defaultValue={ `${item.informations.firstName}  ${item.informations.lastName}` }
                        /></td>
            <td><input type="text" 
                        readOnly 
                        defaultValue={ item.informations.position ? item.informations.position : '-' }
                        /></td>
            <CellSalary
               col={ props.employeeStaffList ? props.employeeStaffList : [] }
               timeSheet={ props.employeeTimeSheet[item._id] ? props.employeeTimeSheet[item._id] : [] }
               id={ item._id }
               isLoading={ props.isLoading }
            />
         </tr>

      ))
    );
 };

export default SalaryForNow;