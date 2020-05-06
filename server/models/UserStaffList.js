const mongoose = require ( 'mongoose' );

const Schema = mongoose.Schema;



const UserStaffListSchema = new Schema (
    {
        created : String,
        data: Array
    }, 
    { collection : 'user-staff-list' },
    { versionKey: false });

module.exports = mongoose.model ( 'user-data-list' , UserStaffListSchema );