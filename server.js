// import bodyParser to format user entered data into JSON
var bodyParser = require('body-parser');
// import express for routing http servers
var express = require('express');
//  import path for utilities for working with file and directory paths
var path = require('path');
// create variable to use express()
var app = express();

// set port to work on server where app deployed or port 8080 for localhost
var PORT = process.env.PORT || 4000;

// set up express to use body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// import routing js files for api and html
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// start server listening on PORT
app.listen(PORT, function(){
    console.log('App listening on port: ' + PORT);
});
