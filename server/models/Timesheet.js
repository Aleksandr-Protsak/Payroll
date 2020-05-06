const mongoose = require ( 'mongoose' );
const Schema = mongoose.Schema;



const TimesheetShema = new Schema (
    {
        year    : { type: Number, required: true },
        month   : { type: Number, required: true },
        data    : Object
        
    }, 
    { collection : 'timesheet' },
    { versionKey: false });

module.exports = mongoose.model ( "timesheet" , TimesheetShema );