const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



//creates an express app
var app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjadb');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//allow routes to be fired in app
app.use('/api', require('./routes/api'));

//error handling
app.use(function(err,req,res,next){
  res.status(422).send({error:err.message});
  //console.log(err);
}); 

//listening to requests
app.listen(process.env.port || 3000,function(){
  console.log(`listening to port 3000` );
});
