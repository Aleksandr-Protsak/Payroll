const mongoose = require ( 'mongoose' );
const Schema = mongoose.Schema;



const UserSchema = new Schema (
    {
        login: String, 
        password: String,
        salt: String,
        role: String,
        informations: {
            firstName: String,
            lastName: String,
            position: String,
            email: String,
            phone: String,
            start_employee: String,
        },
        created_at    : { type: Date, required: true, default: Date.now }
        
    }, 
    { collection : 'user' },
    { versionKey: false });

module.exports = mongoose.model ( "user" , UserSchema );