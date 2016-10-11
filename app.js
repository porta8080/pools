var express = require('express');
var app = express();
var router = express.Router();

app.get('/',function(req,res){
  res.send('Welcome');
});

// app.use(express.static(path.join(__dirname,'public')));

// app.use('/pools',require('./routes/pools'));
app.use('/pages',require('./routes/pages'));

var server = app.listen(8080,function(){
  console.log(server.address());
});
