export function handleDoubleClick( e ){

     let childInput = e.target.children[0];
     e.target.classList.remove( "inactive-cell" );
     if( childInput ) childInput.focus();

};

export function handleBlur( e ){

     e.target.parentElement.classList.add( "inactive-cell" );

};

export function sumColumn( idTable, col ){
     let sum = 0;
     const table = document.getElementById( idTable );
     
     if( table ){
          for ( let r = 1; r < table.rows.length - 1; r++ ){

               if( isFinite( columnCellellValue( table, col, r ))) sum += columnCellellValue( table, col, r );
          
          };
     };
   
     return Math.floor( sum * 100 ) / 100;
};

export function sumRow( idTable, row ){
     let sum = 0;
     const table = document.getElementById( idTable );

     if( table ){
          for ( let c = 2; c < table.rows[row].cells.length; c++ ){
         
               if( isFinite( rowCellellValue( table, row, c ))) sum += rowCellellValue( table, row, c );
          
          };
     };
   
     return Math.floor( sum * 100 ) / 100;
};

export function calculateSalaryForNow( salary, days ){
     let totalBusinessDays = calculateBusinessDays();
     let salaryParseInNum = parseFloat( salary, 10 );

     let count = ( salaryParseInNum  / totalBusinessDays ) * days;

      return Math.floor( count * 100 ) / 100;
}; 

function columnCellellValue( table, col, row ){
     let sumParseInNumber;
     
     if( table.rows[row].cells[col] ){
          if( table.rows[row].cells[col].children[0] ) sumParseInNumber = parseFloat( table.rows[row].cells[col].children[0].value, 10 ); 
          else sumParseInNumber = parseFloat( table.rows[row].cells[col].innerHTML, 10 );
     };

     return sumParseInNumber;
};

function rowCellellValue( table, row, col ){
     let sumParseInNumber;

     if( table.rows[row].cells[col] ){
          if( table.rows[row].cells[col].children[0] )  sumParseInNumber = parseFloat( table.rows[row].cells[col].children[0].value, 10 );
          else sumParseInNumber = parseFloat( table.rows[row].cells[col].innerHTML, 10 );
     };

     return sumParseInNumber;
};

function isWeekday( year, month, day ){
     let checkDay = new Date( year, month, day ).getDay();
     return checkDay !== 0 && checkDay !== 6;
};

function getLastDayOfMonth( year, month ) {
     let date = new Date( year, month, 0 );
     return date.getDate();
};
 
function numberDaysinMonth(){
     const year = new Date().getFullYear();
     const month = new Date().getMonth() + 1 ;
     const numberDays = getLastDayOfMonth( year, month );
     return numberDays;
};

function calculateBusinessDays(){
     const year = new Date().getFullYear();
     const month = new Date().getMonth();
     let totalBusinessDays = 0;
     let totalDays = numberDaysinMonth();

     for( let i = 1; i <= totalDays; i++ )
          if ( isWeekday( year, month, i )) totalBusinessDays++;

     return totalBusinessDays;
};