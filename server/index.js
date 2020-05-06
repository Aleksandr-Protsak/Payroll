const express = require( 'express' );
const db = require( './db' );
const session = require( 'express-session' )
const MongoStore = require( 'connect-mongo' )( session )
const bodyParser = require( 'body-parser' );
const config = require( '../etc/config.json' );
const cors = require( 'cors' );
const bcrypt = require( 'bcrypt' );

const controller = require( './controller/controller' );

const app = express();

app.use(session({
  store: new MongoStore({ url: 'mongodb://localhost/employees' }),
  secret: 'QwqYTDHJGDhGHGSDJghhsdghjGJHGdJH',
  saveUninitialized: false,
  resave: false
}));

app.use( bodyParser.json() );
app.use( express.static(__dirname) );
app.use( cors({ 
                origin: 'http://localhost:3000',
                credentials: true 
              }) 
        );

db.connect( 'mongodb://' + config.db.host + ':' + config.db.port + '/' + config.db.name, 
{useNewUrlParser: true},
 (err) => {
    if(err) return console.log( err );
    app.listen( config.serverPort, () => {
        console.log( "Сервер ожидает подключения..." );
    });
  });

  app.post( '/user',  ( req, res ) => {
    controller.checkUser( req.body )
      .then(( user ) => {
          if( comparePassword( user.password, user.salt, req.body.password ) ){
            req.session.user = { id: user._id };
            res.status( 200 ).send({ role: user.role, token: user._id });
          }else{
            res.status( 404 ).send();
          }
      })
      .catch(( error ) => {
        res.status( 404 ).send( error );
      });
  });

  app.post( "/", ( req, res ) => {
    let hashPassword = encryptPassword( req.body.password );
    req.body = { ...req.body, ...hashPassword };
    controller.addUser( req.body ).then( data => res.send( data ) );
  });

  comparePassword = function( passwordFromDB, salt, passwordFromUser ) {
    let password = bcrypt.hashSync( passwordFromUser, salt );
    return ( password == passwordFromDB );
  };

  encryptPassword = function ( passwordFromUser ){
    let salt = bcrypt.genSaltSync( 10 );

    let password = bcrypt.hashSync( passwordFromUser, salt );
    return { salt, password };
};


   app.get( "/", ( req, res ) => {
      controller.getUserInformations().then( data => res.send( data ) );
  });

  app.get( "/stafflist", ( req, res ) => {
    controller.getUserStaffList().then( data => res.send( data ) );
  });

  app.get( "/timesheet", ( req, res ) => {
    controller.getUsersTimesheet().then( data => res.send( data ) );
  });

  app.put( '/',  ( req, res ) => {
    controller.saveUserStaffListChange( req.body ).then( data => res.send( data ) );   
  });

  app.put( '/timesheet',  ( req, res ) => {
    controller.saveUsersTimesheet( req.body ).then( data => res.send( data ) );   
  });

  app.delete( '/:id', ( req, res ) => {
      controller.removeEmployee( req.params.id ).then( data => res.send( data ) );
  }); 