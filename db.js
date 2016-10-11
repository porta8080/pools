var mongoose = require('mongoose');
'use strict';

function __connection(){
  var username= '',
  password = '',
  server= '127.0.0.1',
  port = '27017',
  database='pages',
  auth = username ? username + ':' + password + '@' : '';

  return 'mongodb://' + auth + server + ':' + port + '/' + database;
}

mongoose.connect(__connection());
var db = mongoose.connection;

db.on('error',function(error){
});

db.once('open',function(callback){
});

module.exports = mongoose;


// var mongojs = require('mongojs');
// 'use strict';
//
// function __connection(){
//   var username= '',
//   password = '',
//   server= 'localhost',
//   port = '27017',
//   database='pools',
//   auth = username ? username + ':' + password + '@' : '';
//
//   return 'mongodb://' + auth + server + ':' + port + '/' + database;
// }
//
// var db = mongojs(__connection());
//
// db.on('error',function(error){
//   // console.log(error);
// });
//
// module.exports = db;
