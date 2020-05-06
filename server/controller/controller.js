const User = require( '../models/User' );
const UserStaffList = require( '../models/UserStaffList' );
const UsersTimesheet = require( '../models/Timesheet' );
const ObjectID = require( 'mongodb' ).ObjectID;

exports.checkUser = function( userData ) {
    return User.findOne({ login: userData.login });
};

exports.addUser = function( data ) {
    let newUser = new User( data );
    return newUser.save();
};

exports.getUserInformations = function() {
    return User.find().select( '-password' );
};

exports.saveUserStaffListChange = function( data ) {
    let nowDate = new Date().toISOString().slice(0,10);

    return UserStaffList.updateOne(
        { 'created': nowDate },
        { '$set': { 'created': nowDate,
                    'data' : data   
                 }},
        { 'upsert': true }
    );
};

exports.getUserStaffList = function() {
    return UserStaffList.findOne().select( '-_id' ).sort({ $natural: -1 });
};

exports.saveUsersTimesheet = function( data ) {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;

    return UsersTimesheet.updateOne(
        { 'year': year, 'month': month },
        { '$set': {  'year': year, 
                     'month': month ,
                     'data' : data   
                 }},
        { 'upsert': true }
    );
};

exports.getUsersTimesheet = function() {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;

    return UsersTimesheet.findOne({ year: year, month: month });
};

exports.removeEmployee = function( id ) {
    return User.remove({ '_id' : new ObjectID( id ) });
};









    