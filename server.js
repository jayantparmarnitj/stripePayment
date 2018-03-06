var express = require('express'),
  app = express(),
  
  port = process.env.PORT || 9000,
  mongoose = require('mongoose'),
  Task = require('./api/models/model'), //created model loading here
  bodyParser = require('body-parser');


mongoose.Promise = global.Promise;

var promise = mongoose.connect('mongodb://localhost:27017/Tododb', {
  useMongoClient: true,
});

promise.then(function(db) {
    console.log("Connected to database!!!");
}, function(err){
    console.log("Error in connecting database " + err);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./api/routes/routes')(app); //importing route


app.listen(port);
app.use(express.static(__dirname));

console.log('stripePayment list RESTful API server started on: ' + port);
