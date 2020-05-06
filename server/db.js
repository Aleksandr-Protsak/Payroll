const mongoose = require( 'mongoose' );

const state = {
    db: null
};

exports.connect = function( url, parser, done ){
    if( state.db ){
        return done;
    };
    mongoose.connect( url, parser, function( err, db ){
        if( err ){
            return done( err );
        };
        state.db = db;
        done();
    });
};

exports.get = function(){
    return state.db;
}
