import React from 'react';

import ChangeDataCell from '../../ui/ui-table-component/ChangeDataCell';
import UiButton from '../../ui/ui-button/UiButton';

const EmployeeDataList = ( props ) => {

     return (
      props.employeeList.map( ( item, index ) => (

        <tr key={ item._id } row={ index }>
          <td><input type="text" 
                      readOnly 
                      defaultValue={ `${item.informations.firstName}  ${item.informations.lastName}` }
              />
              <UiButton 
              className={ 'remove-employeee' }
              buttonClick={ props.clickToRemove.bind( null, item._id ) }
              title={ 'Click for remove employee' }
              value={ '-' }
              />
          </td>
          <td><input type="text" 
                      readOnly 
                      defaultValue={ item.informations.position ? item.informations.position : '-' }
              />
          </td>
          <ChangeDataCell
                col={ props.employeeStaffList ? props.employeeStaffList : [] }
                id={ item._id }
                onChangeInput={ props.onChangeInput }
                handleFocus={ props.handleFocus.bind( null, item._id ) }
                isLoading={ props.isLoading }
          />
        </tr>

      ))
    );
 };

export default EmployeeDataList;