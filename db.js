var mongojs = require('mongojs');
'use strict';

function __connection(){
  var username= '',
  password = '',
  server= 'localhost',
  port = '21017',
  database='pools',
  auth = username ? username + ':' + password + '@' : '';

  return 'mongodb://' + auth + server + ':' + port + '/' + database;
}

var db = mongojs(__connection());

db.on('error',function(error){
  console.log(error);
});

module.exports = db;
